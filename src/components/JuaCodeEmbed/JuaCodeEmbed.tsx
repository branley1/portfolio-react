import React, { useEffect, useMemo, useState } from 'react';
import ReactGA from 'react-ga4';
import './_juacode-embed.scss';

const JuaCodeEmbed: React.FC = () => {
  const baseUrl = (import.meta as any).env?.VITE_JUACODE_URL ||
    (import.meta.env.MODE === 'development'
      ? 'http://localhost:3000'
      : 'https://juacode.netlify.app');
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

  const handleIframeLoad = () => {
    ReactGA.event({
      category: 'JuaCode',
      action: 'JuaCode Iframe Loaded',
      label: 'Iframe Load Complete',
    });
  };


  // Listen for postMessage events from the embed to persist its route and auth state
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!event.origin || event.origin !== baseOrigin) return;
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

  return (
    <div className="juacode-embed-container fullpage">
      <div className="juacode-iframe-wrapper zoom-75">
        <iframe
          src={iframeSrc}
          title="JuaCode AI Coding Assistant"
          className="juacode-iframe"
          onLoad={handleIframeLoad}
          allow="camera; microphone; clipboard-read; clipboard-write"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </div>
  );
};

export default JuaCodeEmbed;
