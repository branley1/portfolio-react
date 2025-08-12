import React, { useEffect, useMemo, useState } from "react";
import { useSpotify } from "../../contexts/SpotifyContext";

interface SpotifyNowPlayingImageProps {
  className?: string;
}

// Renders the external Spotify SVG and refreshes it (cache-bust) whenever
// the isPlaying status changes, so only this widget reloads.
const SpotifyNowPlayingImage: React.FC<SpotifyNowPlayingImageProps> = ({ className = "" }) => {
  const { isPlaying } = useSpotify();
  const [cacheBuster, setCacheBuster] = useState<number>(() => Date.now());

  // Base URL should match the one used across the app
  const UID = "hvoh3gwfkd3h64bzeal1fejmu";
  const baseUrl = useMemo(() => {
    return `https://spotify-github-profile.kittinanx.com/api/view.svg?uid=${UID}&cover_image=true&theme=default&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false`;
  }, []);

  // Whenever status changes, update the cache buster to force image reload
  useEffect(() => {
    setCacheBuster(Date.now());

    // In some cases the upstream widget lags by a couple seconds.
    // Trigger one more refresh shortly after a transition to playing.
    if (isPlaying) {
      const id = setTimeout(() => setCacheBuster(Date.now()), 3000);
      return () => clearTimeout(id);
    }
  }, [isPlaying]);

  const src = `${baseUrl}&cb=${cacheBuster}`;

  return (
    <img
      loading="lazy"
      src={src}
      alt="Spotify now playing widget"
      className={className}
    />
  );
};

export default SpotifyNowPlayingImage;


