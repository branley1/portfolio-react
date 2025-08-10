import React, { useEffect, useRef, useState } from "react";
import "./_navbar.scss";

const CustomNavbar: React.FC = () => {
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

  return (
    <nav
      className={`custom-navbar ${scrolled ? "scrolled" : ""} ${expanded ? "expanded" : ""}`}
      ref={containerRef}
      aria-label="Primary navigation"
    >
      <div className="navbar-content">
        <a href="/" className="navbar-brand">Bmmasi</a>
        <button
          className="navbar-toggle"
          aria-expanded={expanded}
          aria-controls="primary-nav"
          onClick={() => setExpanded((e) => !e)}
        >
          <span className="navbar-toggler-icon" aria-hidden="true" />
          <span className="sr-only">Toggle navigation</span>
        </button>
        <div id="primary-nav" className="navbar-collapse">
          <div className="navbar-links">
            <a className="nav-link" href="#about">Who Am I?</a>
            <a className="nav-link" href="#experience">Technical Experience</a>
            <a className="nav-link" href="/extra-experience">Extracurricular Experience</a>
            <a className="nav-link" href="#custom-projects">Projects</a>
            <a className="nav-link" href="/classic/index.html">🎨 Curious?</a>
          </div>
          <label className="theme-toggle">
            <input
              type="checkbox"
              onChange={handleThemeToggle}
              checked={theme === "dark"}
              aria-label="Toggle theme"
            />
            <span>{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
          </label>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
