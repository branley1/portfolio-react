import React from "react";
import { Card } from "react-bootstrap";
import "./_sidebar.scss";

interface SidebarSpotifyOnlyProps {
  className?: string;
}

const SidebarSpotifyOnly: React.FC<SidebarSpotifyOnlyProps> = ({ className = "" }) => (
  <div className={`sidebar ${className}`}>
    <Card className="sidebar-card">
      <h5>
        Vibe with Me! 🎧
        <a
          href="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&redirect=true"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Spotify profile"
        >
          <i>
            <img
              loading="lazy"
              src="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&cover_image=true&theme=default&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false"
              alt="Spotify now playing widget"
            ></img>
          </i>
        </a>
      </h5>
    </Card>
  </div>
);

export default SidebarSpotifyOnly;
