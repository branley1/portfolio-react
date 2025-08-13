import React from "react";
import { useSpotify } from "../../contexts/SpotifyContext";
import "/src/components/Embeds/_spotify.scss";

interface SpotifyStatusProps {
  compact?: boolean;
  className?: string;
  hideWhenMuted?: boolean; // when not playing, render nothing
}

const SpotifyStatus: React.FC<SpotifyStatusProps> = ({ compact = false, className = "", hideWhenMuted = false }) => {
  const { isPlaying } = useSpotify();

  if (hideWhenMuted && isPlaying === false) {
    return null;
  }

  return (
    <div className={`spotify-status${compact ? " compact" : ""} ${className}`.trim()}>
      <div className="status-row">
        {isPlaying === null ? (
          <>
            <span className="dot dot-neutral blink" aria-hidden />
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
