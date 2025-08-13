import React from "react";
import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ExtraExperience from "../components/ExtraExperience/ExtraExperience";
import Layout from "../components/Layouts/Layout";

const Extracurricular: React.FC = () => {
  return (
    <div className="app-container">
      <CustomNavbar />
      <div className="navbar-spacer" aria-hidden />
      <Layout sidebarVariant="spotifyOnly">
        <ExtraExperience />
      </Layout>
      {/* Bottom page CTA consistent with About Me buttons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", margin: "0.75rem 0 1rem", flexWrap: "wrap" }}>
        <a href="/projects" className="btn-gradient cta-extracurricular-btn" style={{ textDecoration: 'none', fontFamily: 'PT Sans, sans-serif' }}>
          View Projects <i className="fa fa-arrow-right blink-arrow"></i>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Extracurricular;
