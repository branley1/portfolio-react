import React from "react";
import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layouts/Layout";
import ExperienceTimeline from "../components/ExperienceTimeline/ExperienceTimeline";

const TechnicalExperiencePage: React.FC = () => {
  return (
    <div className="app-container">
      <CustomNavbar />
      <div className="navbar-spacer" aria-hidden />
      <Layout sidebarVariant="default">
        <ExperienceTimeline />
      </Layout>
      {/* Bottom page CTA consistent with About Me buttons */}
      <div className="cta-row">
        <a href="/extra-experience" className="btn-gradient cta-extracurricular-btn" style={{ textDecoration: 'none', fontFamily: 'PT Sans, sans-serif' }}>
          View Extracurricular Experience <i className="fa fa-arrow-right blink-arrow"></i>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default TechnicalExperiencePage;


