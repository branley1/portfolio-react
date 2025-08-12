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
      </main>
      {/* Bottom page CTA consistent with About Me buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", margin: "0.75rem 0 1rem", flexWrap: "wrap" }}>
        <a href="/extra-experience" className="btn-gradient cta-extracurricular-btn">
          View Extracurricular Experience <i className="fa fa-arrow-right blink-arrow"></i>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default TechnicalExperiencePage;


