import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import "./_navbar.scss";

const CustomNavbar: React.FC = () => {
  const [theme, setTheme] = useState<string>("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  // Handle theme toggle
  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save to local storage
  };

  return (
    <Navbar expand="lg" className="mb-4 custom-navbar">
      <Navbar.Brand href="/" className="navbar-brand">
        MyPortfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navbar-links">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
        </Nav>
        <Form.Check
          type="switch"
          id="theme-toggle"
          label={theme === "light" ? "Light Mode" : "Dark Mode"}
          onChange={handleThemeToggle}
          checked={theme === "dark"}
          className="theme-toggle"
        />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;