import React, { useEffect, useMemo, useState } from "react";
import "../JuaCodeEmbed/_juacode-embed.scss";
import { useSpotify } from "../../contexts/SpotifyContext";
import SpotifyNowPlayingImage from "./SpotifyNowPlayingImage";

interface ChatbotEmbedProps {
  src?: string;
  title?: string;
  height?: number | string;
}

const ChatbotEmbed: React.FC<ChatbotEmbedProps> = ({
  src,
  title = "Chatbot",
  height = 520,
}) => {
  const { isPlaying } = useSpotify();
  const envSrc =
    (import.meta as any).env?.VITE_CHATBOT_URL ||
    ((import.meta as any).env?.MODE === "development"
      ? "http://localhost:3000/chat"
      : "https://juacode.netlify.app/chat");

  const baseSrc = useMemo(() => src ?? envSrc, [src, envSrc]);
  const [reloadNonce] = useState<number>(0);
  const [didLoad, setDidLoad] = useState<boolean>(false);
  const [didError, setDidError] = useState<boolean>(false);

  const iframeSrc = useMemo(() => {
    if (!baseSrc) return "";
    const url = new URL(baseSrc, window.location.origin);
    url.searchParams.set("cb", String(reloadNonce));
    return url.toString();
  }, [baseSrc, reloadNonce]);

  // Consider it failed if it doesn't load within timeout
  useEffect(() => {
    if (!iframeSrc) return;
    setDidLoad(false);
    setDidError(false);
    const timeoutId = setTimeout(() => {
      if (!didLoad) setDidError(true);
    }, 12000);
    return () => clearTimeout(timeoutId);
  }, [iframeSrc]);

  // Fast preflight to avoid browser error pages (e.g., localhost refused to connect)
  useEffect(() => {
    if (!iframeSrc) return;
    let cancelled = false;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 4000);

    async function preflight() {
      try {
        setDidError(false);
        await fetch(iframeSrc, { method: "HEAD", mode: "no-cors", signal: controller.signal });
      } catch {
        if (!cancelled) setDidError(true);
      } finally {
        clearTimeout(timer);
      }
    }
    preflight();
    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timer);
    };
  }, [iframeSrc, reloadNonce]);

  

  if (!baseSrc) {
    return (
      <div className="chatbot-embed" role="region" aria-label={title} style={{
        border: "1px solid var(--border-color)", borderRadius: 12, padding: 16, textAlign: "center"
      }}>
        <p style={{ margin: 0 }}>
          We're preparing this experience. Please check back in a few minutes.
        </p>
      </div>
    );
  }

  return (
    <div className="chatbot-embed" role="region" aria-label={title}>
      {!didError ? (
        <iframe
          key={reloadNonce}
          src={iframeSrc}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setDidLoad(true)}
          onError={() => setDidError(true)}
          allow="microphone; clipboard-read; clipboard-write;"
          sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-downloads"
          style={{ width: "100%", height: typeof height === "number" ? `${height}px` : height, border: 0, borderRadius: 12 }}
        />
      ) : (
        <div className="juacode-fallback" role="status" aria-live="polite" style={{ height: typeof height === "number" ? `${height}px` : height }}>
          <div className="fallback-icon">
            <span className="dot-pulse" aria-hidden></span>
          </div>
          <div className="fallback-text">
            <h3
              style={{
                fontSize: 18,
                fontFamily: 'PT Sans',
                fontWeight: 700,
                lineHeight: 1.5,
                margin: 0,
              }}
            >I&apos;m probably working on this embed right now.</h3>
          </div>
          {isPlaying ? (
            <>
              <p style={{ fontFamily: 'PT Sans', fontWeight: 400, lineHeight: 1.5, margin: 0, fontSize: 16 }}>So in the meantime, here&apos;s what I&apos;m jamming to:</p>
              <div style={{ marginTop: 12 }} className="widget">
                <SpotifyNowPlayingImage />
              </div>
            </>
          ) : null}
          <p style={{ fontFamily: 'PT Sans', fontWeight: 400, lineHeight: 1.5, margin: 0, fontSize: 16, textAlign: 'center' }}>
            Please try again in a bit.
          </p>
          <p style={{ fontFamily: 'PT Sans', fontWeight: 400, lineHeight: 1.5, margin: 0, fontSize: 16, textAlign: 'center' }}>
            If you&apos;re still having issues, please contact me at <a href="mailto:bbm1@duck.com" style={{ color: 'var(--link-color)', textDecoration: 'underline', cursor: 'pointer' }}>bbm1@duck.com</a>.
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatbotEmbed;
