import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import SidebarSpotifyOnly from "../Sidebar/SidebarSpotifyOnly";
import SpotifyStatus from "../Embeds/SpotifyStatus";
import "./_layout.scss";

interface LayoutProps {
  children: React.ReactNode;
  sidebarVariant?: "default" | "spotifyOnly";
}

const Layout: React.FC<LayoutProps> = ({ children, sidebarVariant = "default" }) => {
  // Single state governs both desktop (collapsed) and mobile (active) behavior
  const SIDEBAR_STORAGE_KEY = "sidebar:open";
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(SIDEBAR_STORAGE_KEY);
      return stored === "true"; // closed by default when key is missing
    } catch {
      return false;
    }
  });

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Persist state across reloads
  useEffect(() => {
    try {
      localStorage.setItem(SIDEBAR_STORAGE_KEY, String(isSidebarOpen));
    } catch {
      // ignore write errors (e.g., privacy mode)
    }
  }, [isSidebarOpen]);

  // Refs for detecting outside clicks
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!isSidebarOpen) return;
      const sidebarEl = sidebarRef.current;
      const toggleEl = toggleBtnRef.current;
      const target = e.target as Node | null;
      if (!target) return;
      // If click is outside both the sidebar container and the toggle button, close
      const clickedOutsideSidebar = sidebarEl ? !sidebarEl.contains(target) : true;
      const clickedOutsideToggle = toggleEl ? !toggleEl.contains(target) : true;
      if (clickedOutsideSidebar && clickedOutsideToggle) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isSidebarOpen]);

  return (
    <div className="content-wrapper">
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        ref={toggleBtnRef}
        aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        title={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        {/* Simple sidebar icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="6" height="16" rx="1.5" fill="currentColor" opacity="0.85"/>
          <rect x="11" y="4" width="10" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.6" fill="none"/>
        </svg>
        {/* Compact Spotify indicator on the toggle button - only when sidebar is closed */}
        {!isSidebarOpen && (
          <div className="navbar-spotify-indicator">
            <SpotifyStatus compact />
          </div>
        )}
      </button>

      {/* Sidebar: 'active' for mobile open, 'collapsed' for desktop collapse */}
      <div ref={sidebarRef}>
        {sidebarVariant === "spotifyOnly" ? (
          <SidebarSpotifyOnly className={isSidebarOpen ? "active" : "collapsed"} />
        ) : (
          <Sidebar className={isSidebarOpen ? "active" : "collapsed"} />
        )}
      </div>

      {/* Main content */}
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
