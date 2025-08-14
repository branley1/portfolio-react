import React, { useEffect, useMemo, useState } from 'react';
import { useSpotify } from '../../contexts/SpotifyContext';
import SpotifyNowPlayingImage from '../Embeds/SpotifyNowPlayingImage';
import './_juacode-embed.scss';

const JuaCodeEmbed: React.FC = () => {
  const { isPlaying } = useSpotify();
  // Always use the online JuaCode URL for embeds
  const baseUrl = 'https://juacode.netlify.app';
  const baseOrigin = useMemo(() => {
    try { return new URL(baseUrl).origin; } catch { return baseUrl; }
  }, [baseUrl]);

  // Persist the last iframe URL so the embed can restore state across reloads.
  // Use a 6-hour TTL to avoid logging the user out unnecessarily between navigations.
  const STORAGE_KEY = 'juacode:lastState';
  const SIX_HOURS_MS = 6 * 60 * 60 * 1000;
  const initialSrc = useMemo(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object' && typeof parsed.url === 'string' && typeof parsed.updatedAt === 'number') {
          const isFresh = Date.now() - parsed.updatedAt < SIX_HOURS_MS;
          if (isFresh && parsed.url.startsWith(baseOrigin)) {
            return parsed.url as string;
          }
        }
      }
    } catch {}
    // Default to the embed route; the app will redirect to login if needed
    return `${baseUrl}/embed`;
  }, [baseUrl, baseOrigin]);

  const [iframeSrc, setIframeSrc] = useState<string>(initialSrc);
  const [didError404, setDidError404] = useState<boolean>(false);
  const [embedAlive, setEmbedAlive] = useState<boolean>(false);
  

  const handleIframeLoad = () => {
    // Lazily import analytics to keep initial JS smaller
    try {
      // @ts-ignore dynamic import to avoid early evaluation
      import('react-ga4').then((mod) => {
        try {
          mod.default.event({
            category: 'JuaCode',
            action: 'JuaCode Iframe Loaded',
            label: 'Iframe Load Complete',
          });
        } catch {}
      }).catch(() => {});
    } catch {}
    setDidError404(false);
    setEmbedAlive(true);
  };


  // Listen for postMessage events from the embed to persist its route and auth state
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!event.origin || event.origin !== baseOrigin) return;
      // Any valid message from the embed indicates it's alive
      try { setEmbedAlive(true); } catch {}
      const data = event.data as any;
      if (!data || typeof data !== 'object') return;
      if (data.type === 'juacode:navigate' && typeof data.path === 'string') {
        const next = `${baseUrl}${data.path.startsWith('/') ? '' : '/'}${data.path}`;
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify({ url: next, updatedAt: Date.now() }));
        } catch {}
        setIframeSrc(next);
      } else if (data.type === 'juacode:authAlive') {
        // The embed can ping this periodically; refresh TTL without changing URL
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object' && typeof parsed.url === 'string') {
              localStorage.setItem(STORAGE_KEY, JSON.stringify({ url: parsed.url, updatedAt: Date.now() }));
            }
          }
        } catch {}
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [baseUrl, baseOrigin]);

  // Keep-alive: periodically ping the embed; it can respond with juacode:authAlive
  useEffect(() => {
    const interval = setInterval(() => {
      try {
        const iframe = document.querySelector<HTMLIFrameElement>('iframe.juacode-iframe');
        iframe?.contentWindow?.postMessage({ type: 'juacode:keepalive' }, baseOrigin);
      } catch {}
    }, 5 * 60 * 1000); // every 5 minutes
    return () => clearInterval(interval);
  }, [baseOrigin]);

  // Fast preflight: check reachability before rendering iframe to avoid showing browser error page
  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);

    const run = () => {
      if (!iframeSrc) return;
      (async () => {
        try {
          setDidError404(false);
          const res = await fetch(iframeSrc, { method: 'HEAD', mode: 'cors', signal: controller.signal });
          if (cancelled) return;
          setDidError404(res?.status === 404);
        } catch {
          if (cancelled) return;
          // Network/CORS failures are inconclusive; do not mark error
          setDidError404(false);
        } finally {
          clearTimeout(timer);
        }
      })();
    };

    // Defer preflight to idle time to reduce main-thread contention
    const idleId = (window as any).requestIdleCallback
      ? (window as any).requestIdleCallback(run, { timeout: 3000 })
      : setTimeout(run, 0);

    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timer);
      if ((window as any).cancelIdleCallback && idleId) {
        try { (window as any).cancelIdleCallback(idleId); } catch {}
      } else if (idleId) {
        clearTimeout(idleId as unknown as number);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [iframeSrc]);

  // Reset flags on src change; no timeout fallback
  useEffect(() => {
    setDidError404(false);
    setEmbedAlive(false);
  }, [iframeSrc]);

  

  return (
    <div className="juacode-embed-container fullpage">
      <div className="juacode-iframe-wrapper zoom-75" style={{ contentVisibility: 'auto', containIntrinsicSize: '900px 600px' }}>
          <iframe
            src={iframeSrc}
            title="JuaCode AI Coding Assistant"
            className="juacode-iframe"
            loading="lazy"
            onLoad={handleIframeLoad}
            onError={() => { /* ignore generic errors; rely on 404+no-ping */ }}
            allow="camera; microphone; clipboard-read; clipboard-write"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        {(!embedAlive && didError404) ? (
          <div className="juacode-fallback" role="status" aria-live="polite">
            <div className="fallback-icon">
              <span className="dot-pulse" aria-hidden></span>
            </div>
            <div className="fallback-text">
              <h3>I&apos;m probably working on this embed right now.</h3>
            </div>
            {isPlaying ? (
              <>
                <p>In the meantime, here&apos;s what I&apos;m jamming to:</p>
                <div style={{ marginTop: 12 }} className="widget">
                  <SpotifyNowPlayingImage />
                </div>
              </>
            ) : null}
            <p>
              Please try again in a bit.
            </p>
            <p>
              If you&apos;re still having issues, please contact me at <a href="mailto:bbm1@duck.com" className="link">bbm1@duck.com</a>.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default JuaCodeEmbed;
