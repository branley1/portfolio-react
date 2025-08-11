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

  // Persist the last iframe URL so the embed can restore state across reloads
  const STORAGE_KEY = 'juacode:lastSrc';
  const initialSrc = useMemo(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved.startsWith(baseOrigin)) return saved;
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


  // Listen for optional postMessage events from the embed to persist its route
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!event.origin || event.origin !== baseOrigin) return;
      const data = event.data as any;
      if (data && typeof data === 'object' && data.type === 'juacode:navigate' && typeof data.path === 'string') {
        const next = `${baseUrl}${data.path.startsWith('/') ? '' : '/'}${data.path}`;
        try { localStorage.setItem(STORAGE_KEY, next); } catch {}
        setIframeSrc(next);
      }
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [baseUrl, baseOrigin]);

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
