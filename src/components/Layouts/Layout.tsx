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

  // Fixed height for the expanded sidebar (window effect)
  const [sidebarFixedHeightPx, setSidebarFixedHeightPx] = useState<number | null>(null);

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
  const mainContentRef = useRef<HTMLElement | null>(null);

  // Compute fixed height for expanded sidebar as full page content height
  useEffect(() => {
    const computeFixedHeight = () => {
      const mainEl = mainContentRef.current;
      if (!mainEl) {
        setSidebarFixedHeightPx(null);
        return;
      }
      const contentRect = mainEl.getBoundingClientRect();
      // Use scrollHeight to capture full content, fallback to bounding rect height
      const contentHeight = Math.max(mainEl.scrollHeight || 0, Math.round(contentRect.height));
      const fixed = Math.max(0, contentHeight - 25);
      setSidebarFixedHeightPx(fixed);
    };

    computeFixedHeight();

    const onResize = () => computeFixedHeight();
    window.addEventListener("resize", onResize);

    // Watch for content size changes
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && mainContentRef.current) {
      ro = new ResizeObserver(() => computeFixedHeight());
      ro.observe(mainContentRef.current);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      if (ro && mainContentRef.current) {
        try { ro.unobserve(mainContentRef.current); } catch {}
      }
    };
  }, []);

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
      <div className="sidebar-toggle-wrapper">
        <button
          className="sidebar-toggle btn-gradient"
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
        </button>
        {/* Overlayed Spotify indicator, positioned relative to wrapper so it's above the button border */}
        <div className={`navbar-spotify-indicator ${isSidebarOpen ? 'hidden' : ''}`}>
          <SpotifyStatus compact hideWhenMuted />
        </div>
      </div>

      {/* Sidebar: 'active' for mobile open, 'collapsed' for desktop collapse */}
      <div ref={sidebarRef}>
        {sidebarVariant === "spotifyOnly" ? (
          <SidebarSpotifyOnly className={isSidebarOpen ? "active" : "collapsed"} />
        ) : (
          <Sidebar
            className={isSidebarOpen ? "active" : "collapsed"}
            maxHeightPx={sidebarFixedHeightPx ?? undefined}
          />
        )}
      </div>

      {/* Main content */}
      <main className="main-content" ref={mainContentRef}>{children}</main>
    </div>
  );
};

export default Layout;
