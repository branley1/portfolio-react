import React from "react";
import ReactGA from "react-ga4";
import { Routes, Route, useNavigate } from "react-router-dom";
import Highlights from "./pages/Highlights";
import Layout from "./components/Layouts/Layout";
import CustomNavbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import ExperienceTimeline from "./components/ExperienceTimeline/ExperienceTimeline";
import Extracurricular from "./pages/Extracurricular";
import ProjectsPage from "./pages/Projects";
import JuaCode from "./pages/JuaCode";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";

// Initialize Google analytics
const googleAnalyticsKey = import.meta.env.VITE_GOOGLE_ANALYTICS_KEY;
if (googleAnalyticsKey) {
  ReactGA.initialize(googleAnalyticsKey);
}

// Main portfolio component
const MainPortfolio: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <CustomNavbar />
      {/* Spacer to ensure content starts below fixed navbar */}
      <div className="navbar-spacer" aria-hidden />
      <Hero />
      <div className="content-container">
        <Layout>
          <AboutMe />
          <ExperienceTimeline />
        </Layout>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
        <button
          type="button"
          className="btn-gradient cta-extracurricular-btn"
          onClick={() => navigate("/extra-experience")}
        >
          View Extracurricular Experience <i className="fa fa-arrow-right blink-arrow"></i>
        </button>
      </div>
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainPortfolio />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/extra-experience" element={<Extracurricular />} />
    <Route path="/highlights" element={<Highlights />} />
    <Route path="/juacode" element={<JuaCode />} />
  </Routes>
);

export default App;
