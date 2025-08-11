import React from "react";
import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProjectsShowcase from "../components/Projects/Projects";
import "./Projects.scss";

const ProjectsPage: React.FC = () => (
  <div className="app-container page-projects">
    <CustomNavbar />
    <div className="navbar-spacer" aria-hidden />
    <div className="content-container">
      <ProjectsShowcase />
    </div>
    <Footer />
  </div>
);

export default ProjectsPage;
