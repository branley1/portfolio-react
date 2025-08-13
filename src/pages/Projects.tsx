import React from "react";
import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProjectsShowcase from "../components/Projects/Projects";
import "./Projects.scss";
import Layout from "../components/Layouts/Layout";

const ProjectsPage: React.FC = () => (
  <div className="app-container page-projects">
    <CustomNavbar />
    <div className="navbar-spacer" aria-hidden />
    <Layout sidebarVariant="spotifyOnly">
      <ProjectsShowcase />
    </Layout>
    {/* Bottom page CTA */}
    <div className="cta-row">
      <a href="/extra-experience" className="btn-gradient cta-extracurricular-btn" style={{ textDecoration: 'none', fontFamily: 'PT Sans, sans-serif' }}>
        View Extracurricular Experience <i className="fa fa-arrow-right blink-arrow"></i>
      </a>
    </div>
    <Footer />
  </div>
);

export default ProjectsPage;
