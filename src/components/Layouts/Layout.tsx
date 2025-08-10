import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import SidebarSpotifyOnly from "../Sidebar/SidebarSpotifyOnly";
import "./_layout.scss";

interface LayoutProps {
  children: React.ReactNode;
  sidebarVariant?: "default" | "spotifyOnly";
}

const Layout: React.FC<LayoutProps> = ({ children, sidebarVariant = "default" }) => {
  // Single state governs both desktop (collapsed) and mobile (active) behavior
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="content-wrapper">
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        title={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {/* Simple sidebar icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="6" height="16" rx="1.5" fill="currentColor" opacity="0.85"/>
          <rect x="11" y="4" width="10" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        </svg>
      </button>

      {/* Sidebar: 'active' for mobile open, 'collapsed' for desktop collapse */}
      {sidebarVariant === "spotifyOnly" ? (
        <SidebarSpotifyOnly className={isSidebarOpen ? "active" : "collapsed"} />
      ) : (
        <Sidebar className={isSidebarOpen ? "active" : "collapsed"} />
      )}

      {/* Main content */}
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
