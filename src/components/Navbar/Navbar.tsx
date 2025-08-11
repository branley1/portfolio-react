import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./_navbar.scss";

const CustomNavbar: React.FC = () => {
  const navigate = useNavigate();
  
  // Prefer dark mode but respect user's stored theme preference
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : "dark";
  });

  // Track scroll position for blur effect
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Handle scroll for blur effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle theme toggle
  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save to local storage
  };

  // Control navbar expanded state for mobile and handle outside clicks
  const [expanded, setExpanded] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Track viewport size to place a single theme toggle appropriately
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);
    updateIsMobile();
    mediaQuery.addEventListener('change', updateIsMobile);
    return () => mediaQuery.removeEventListener('change', updateIsMobile);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (expanded && containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [expanded]);

  // Measure navbar height and expose as CSS variable for layout spacing
  useEffect(() => {
    const updateHeightVar = () => {
      const h = containerRef.current?.offsetHeight || 64;
      document.documentElement.style.setProperty("--navbar-height", `${h}px`);
    };
    updateHeightVar();
    window.addEventListener("resize", updateHeightVar);
    return () => window.removeEventListener("resize", updateHeightVar);
  }, []);

  return (
    <nav
      className={`custom-navbar ${scrolled ? "scrolled" : ""} ${expanded ? "expanded" : ""}`}
      ref={containerRef}
      aria-label="Primary navigation"
    >
      <div className="navbar-content">
        <a href="/" className="navbar-brand">Bmmasi</a>
        <div id="primary-nav" className="navbar-collapse">
          <div id="primary-links" className="navbar-links">
            <a className="nav-link" href="#about">Who Am I?</a>
            <a className="nav-link" href="/juacode">
              <img
                src="/icon-64.png"
                alt="JuaCode logo"
                width={16}
                height={16}
                style={{ marginRight: '2px', verticalAlign: 'text-bottom', marginTop: '2px'}}
              />
              Try JuaCode
            </a>
            <a className="nav-link" href="#experience">Technical</a>
            <a className="nav-link" href="/extra-experience">Extracurricular</a>
            <a className="nav-link" href="/projects">Projects</a>
            <a className="nav-link" href="/classic/index.html">🎨 Curious?</a>
            {/* Theme toggle switch appears here only on mobile when expanded */}
            {isMobile && expanded && (
              <div className="nav-link theme-switch-container">
                <Form.Check
                  type="switch"
                  id="mobile-theme-toggle"
                  label={theme === "light" ? "" : ""}
                  onChange={handleThemeToggle}
                  checked={theme === "dark"}
                  className="mobile-theme-switch"
                />
              </div>
            )}
          </div>
        </div>
        {/* Right-side actions: desktop theme toggle (far right) and mobile hamburger */}
        <div className="navbar-actions">
          {!isMobile && (
            <div className="desktop-theme-switch-container">
              <Form.Check
                type="switch"
                id="desktop-theme-toggle"
                label={theme === "light" ? "" : ""}
                style={{fontSize: '0.9rem'}}
                onChange={handleThemeToggle}
                checked={theme === "dark"}
                className="desktop-theme-switch"
              />
            </div>
          )}
          <button
            className="navbar-toggle"
            aria-expanded={expanded}
            aria-controls="primary-nav"
            onClick={() => setExpanded((e) => !e)}
          >
            <span className="navbar-toggler-icon" aria-hidden="true" />
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
