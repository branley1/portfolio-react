import React, { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./_navbar.scss";
import { useSpotify } from "../../contexts/SpotifyContext";

const CustomNavbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Helper function to check if a nav link should be active
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
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

  // Recalculate height when expanded/collapsed so the spacer pushes content correctly
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const h = containerRef.current?.offsetHeight || 64;
      document.documentElement.style.setProperty("--navbar-height", `${h}px`);
    });
    return () => cancelAnimationFrame(raf);
  }, [expanded]);

  // Spotify state for brand animation
  const { isPlaying } = useSpotify();

  // Navigation handler that scrolls to top and closes mobile menu
  const handleNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
    setExpanded(false);
  };

  // Wiggle effect on brand click
  const brandRef = useRef<HTMLButtonElement | null>(null);
  const handleBrandClick = () => {
    // Only wiggle when Spotify is NOT playing (icon logo state)
    if (!isPlaying && brandRef.current) {
      brandRef.current.classList.remove('wiggle-once');
      // Force reflow to restart the animation if clicked multiple times
      void brandRef.current.offsetWidth;
      brandRef.current.classList.add('wiggle-once');
    }
    handleNavigation('/');
  };

  // No decorative river effect

  return (
    <nav
      className={`custom-navbar ${scrolled ? "scrolled" : ""} ${expanded ? "expanded" : ""}`}
      ref={containerRef}
      aria-label="Primary navigation"
    >
      <div className="navbar-content">
        <button
          className={`navbar-brand vinyl-disk ${isPlaying ? 'playing' : ''}`}
          onClick={handleBrandClick}
          aria-label="Home"
          style={{ border: 'none', background: 'transparent', padding: 0 }}
          ref={brandRef}
        >
          {isPlaying ? (
            <img
              src={theme === 'light' ? '/brand/vinyl-light.svg' : '/brand/vinyl-dark.svg'}
              alt="Vinyl logo"
              width={48}
              height={48}
              className={`brand-logo ${isPlaying ? 'playing' : ''}`}
            />
          ) : (
            <img
              src="/portfolio-logo.png"
              alt="Logo"
              width={48}
              height={48}
              className="brand-logo"
            />
          )}
          <span className="sr-only">Bmmasi</span>
        </button>
        <div id="primary-nav" className="navbar-collapse">
          <div id="primary-links" className="navbar-links">
            <button
              className={`nav-link btn-gradient ${isActive('/') ? 'active' : ''}`}
              onClick={() => handleNavigation('/')}
              style={{ border: 'none' }}
            >
              Who Am I?
            </button>
            <button 
              className={`nav-link btn-gradient juacode-btn ${isActive('/juacode') ? 'active' : ''}`}
              onClick={() => handleNavigation('/juacode')}
              style={{ border: 'none' }}
            >
              <img
                src="/icon-64.png"
                alt="JuaCode logo"
                width={14}
                height={14}
                style={{ marginRight: '2px', verticalAlign: 'text-bottom', marginTop: '2px'}}
              />
              JuaCode AI
            </button>
            <button
              className={`nav-link btn-gradient ${isActive('/technical') ? 'active' : ''}`}
              onClick={() => handleNavigation('/technical')}
              style={{ border: 'none' }}
            >
              Technical
            </button>
            <button 
              className={`nav-link btn-gradient ${isActive('/projects') ? 'active' : ''}`}
              onClick={() => handleNavigation('/projects')}
              style={{ border: 'none' }}
            >
              Projects
            </button>
            <button 
              className={`nav-link btn-gradient ${isActive('/extra-experience') ? 'active' : ''}`}
              onClick={() => handleNavigation('/extra-experience')}
              style={{ border: 'none' }}
            >
              Extracurricular
            </button>
            <button
              className={`nav-link btn-gradient ${isActive('/highlights') ? 'active' : ''}`}
              onClick={() => handleNavigation('/highlights')}
              style={{ border: 'none' }}
            >
              Git Stats
            </button>
          </div>
        </div>
        {/* Right-side actions: theme toggle and mobile hamburger */}
        <div className="navbar-actions">
          <div className="theme-switch-container">
            <Form.Check
              type="switch"
              id="theme-toggle"
              label={theme === "light" ? "" : ""}
              style={{fontSize: '0.9rem'}}
              onChange={handleThemeToggle}
              checked={theme === "dark"}
              className="theme-switch"
            />
          </div>
          <button
            className="navbar-toggle mobile-only"
            aria-expanded={expanded}
            aria-controls="primary-nav"
            onClick={() => setExpanded((e) => !e)}
          >
            <span className="navbar-toggler-icon" aria-hidden="true" />
            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </div>
      {/* Decorative river layer removed */}
    </nav>
  );
};

export default CustomNavbar;
