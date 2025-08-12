import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface SpotifyContextType {
  isPlaying: boolean | null;
}

const SpotifyContext = createContext<SpotifyContextType | undefined>(undefined);

export const useSpotify = (): SpotifyContextType => {
  const context = useContext(SpotifyContext);
  if (context === undefined) {
    throw new Error('useSpotify must be used within a SpotifyProvider');
  }
  return context;
};

interface SpotifyProviderProps {
  children: ReactNode;
}

export const SpotifyProvider: React.FC<SpotifyProviderProps> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    let retryCount = 0;
    const maxRetries = 3;
    const UID = "hvoh3gwfkd3h64bzeal1fejmu";
    const SVG_URL = `https://spotify-github-profile.kittinanx.com/api/view.svg?uid=${UID}&cover_image=true&theme=default&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false`;

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
              continue;
            }
            
            const svgContent = await response.text();
            
            // Check if the SVG contains indicators of offline/not playing status
            const isOffline = /Currently not playing on Spotify|Offline|Not Playing|not listening|no track|Recently played tracks|No track currently playing/i.test(svgContent);
            
            // Simple and reliable: just use the inverse of isOffline
            const isCurrentlyPlaying = !isOffline;
            
            if (!cancelled) {
              setIsPlaying(isCurrentlyPlaying);
              retryCount = 0; // Reset retry count on success
            }
            return; // Success, exit the proxy loop
            
          } catch (proxyError) {
            continue;
          }
        }
        
        // If all proxies failed
        throw new Error("All proxies failed");
        
      } catch (error) {
        retryCount++;
        
        if (retryCount < maxRetries) {
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
    const id = setInterval(checkSpotifyStatus, 5000); // Check every 5s
    
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return (
    <SpotifyContext.Provider value={{ isPlaying }}>
      {children}
    </SpotifyContext.Provider>
  );
};
