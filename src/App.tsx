import React from "react";
import Layout from "./components/Layouts/Layout";
import CustomNavbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import ExperienceTimeline from "./components/ExperienceTimeline/ExperienceTimeline";
import ProjectsShowcase from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";

const App: React.FC = () => (
  <div className="app-container">
    <CustomNavbar />
    <Hero />
    <Layout>
      <AboutMe />
      <ExperienceTimeline />
      <ProjectsShowcase />
    </Layout>
    <Footer />
  </div>
);

export default App;
