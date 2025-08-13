import React from "react";
import { Card } from "react-bootstrap";
import "./_sidebar.scss";
import SpotifyNowPlayingImage from "../Embeds/SpotifyNowPlayingImage";

interface SidebarSpotifyOnlyProps {
  className?: string;
}

const SidebarSpotifyOnly: React.FC<SidebarSpotifyOnlyProps> = ({ className = "" }) => (
  <div className={`sidebar ${className}`}>
    <Card className="sidebar-card">
      <h5>
        vibe with me
        <a
          href="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&redirect=true"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Spotify profile"
        >
          <i>
            <SpotifyNowPlayingImage className="spotify-now-playing--small" />
          </i>
        </a>
      </h5>
    </Card>
  </div>
);

export default SidebarSpotifyOnly;
