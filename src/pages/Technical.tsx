import React from "react";
import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ExperienceTimeline from "../components/ExperienceTimeline/ExperienceTimeline";

const TechnicalExperiencePage: React.FC = () => {
  return (
    <div className="app-container">
      <CustomNavbar />
      <div className="navbar-spacer" aria-hidden />
      <main className="content-container">
        <ExperienceTimeline />
        <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginTop: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          <a href="/extra-experience" className="btn-gradient" style={{ fontSize: '0.95rem', padding: '0.5rem 0.9rem' }}>
            View Extracurricular Experience <i className="fa fa-arrow-right blink-arrow"></i>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TechnicalExperiencePage;


