import React, { useEffect, useState } from "react";
import "/src/components/Embeds/_spotify.scss";

const UID = "hvoh3gwfkd3h64bzeal1fejmu";
const SVG_URL = `https://spotify-github-profile.kittinanx.com/api/view.svg?uid=${UID}&cover_image=true&theme=default&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false`;

interface SpotifyStatusProps {
  compact?: boolean;
  className?: string;
}

const SpotifyStatus: React.FC<SpotifyStatusProps> = ({ compact = false, className = "" }) => {
  const [isPlaying, setIsPlaying] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    let retryCount = 0;
    const maxRetries = 3;

    const checkSpotifyStatus = async () => {
      try {
        // Multiple proxy fallbacks
        const cacheBuster = `cb=${Date.now()}`;
        const svgUrl = `${SVG_URL}&${cacheBuster}`;
        
        const proxies = [
          `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(svgUrl)}`,
          `https://api.allorigins.win/raw?url=${encodeURIComponent(svgUrl)}`,
          `https://corsproxy.io/?${encodeURIComponent(svgUrl)}`
        ];
        
        for (const proxyUrl of proxies) {
          try {
            
            const response = await fetch(proxyUrl, { 
              method: 'GET',
              mode: 'cors'
            });
            
            if (!response.ok) {
              //console.log(`Proxy failed with status: ${response.status}`);
              continue;
            }
            
            const svgContent = await response.text();
            
            // Check if the SVG contains indicators of offline/not playing status
            const isOffline = /Currently not playing on Spotify|Offline|Not Playing|not listening|no track|Recently played tracks|No track currently playing/i.test(svgContent);
            
            // Simple and reliable: just use the inverse of isOffline
            const isPlaying = !isOffline;
            
            //console.log("🎵 Spotify status:", isPlaying ? "Playing" : "Not playing");
            
            if (!cancelled) {
              setIsPlaying(isPlaying);
              retryCount = 0; // Reset retry count on success
            }
            return; // Success, exit the proxy loop
            
          } catch (proxyError) {
            //console.log("Proxy error:", proxyError);
            continue; // Try next proxy
          }
        }
        
        // If all proxies failed
        throw new Error("All proxies failed");
        
      } catch (error) {
        //console.log("Spotify status check failed:", error);
        retryCount++;
        
        if (retryCount < maxRetries) {
          //console.log(`Retrying in 5 seconds... (${retryCount}/${maxRetries})`);
          setTimeout(() => {
            if (!cancelled) checkSpotifyStatus();
          }, 5000);
        } else {
          // After max retries, default to not playing
          if (!cancelled) setIsPlaying(false);
        }
      }
    };

    checkSpotifyStatus();
    const id = setInterval(checkSpotifyStatus, 30000); // Check every 30s
    
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return (
    <div className={`spotify-status${compact ? " compact" : ""} ${className}`.trim()}>
      <div className="status-row">
        {isPlaying === null ? (
          <>
            <span className="dot dot-neutral" aria-hidden />
            {!compact && <span className="label">Checking Spotify…</span>}
          </>
        ) : isPlaying ? (
          <>
            <span className="dot dot-green blink" aria-hidden />
            {!compact && <span className="label">Listening on Spotify</span>}
          </>
        ) : (
          <>
            <span className="dot dot-muted" aria-hidden />
            {!compact && <span className="label">Not currently streaming</span>}
          </>
        )}
      </div>
    </div>
  );
};

export default SpotifyStatus;
