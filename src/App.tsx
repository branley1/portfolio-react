import React from "react";
import ReactGA from "react-ga4";
import { Routes, Route } from "react-router-dom";
import Highlights from "./pages/Highlights";
import Layout from "./components/Layouts/Layout";
import CustomNavbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import Extracurricular from "./pages/Extracurricular";
import ProjectsPage from "./pages/Projects";
import JuaCode from "./pages/JuaCode";
import TechnicalExperiencePage from "./pages/Technical";
import Footer from "./components/Footer/Footer";
import { SpotifyProvider } from "./contexts/SpotifyContext";
import "./styles/main.scss";

// Initialize Google analytics
const googleAnalyticsKey = import.meta.env.VITE_GOOGLE_ANALYTICS_KEY;
if (googleAnalyticsKey) {
  ReactGA.initialize(googleAnalyticsKey);
}

// Main portfolio component
const MainPortfolio: React.FC = () => {
  return (
    <>
      <CustomNavbar />
      {/* Keep spacer with the scrollable content */}
      <div className="app-container">
        <div className="navbar-spacer" aria-hidden />
        <Hero />
        <div className="content-container">
          <Layout>
            <AboutMe />
          </Layout>
        </div>
        <Footer />
      </div>
    </>
  );
};

const App: React.FC = () => (
  <SpotifyProvider>
    <Routes>
      <Route path="/" element={<MainPortfolio />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/technical" element={<TechnicalExperiencePage />} />
      <Route path="/extra-experience" element={<Extracurricular />} />
      <Route path="/highlights" element={<Highlights />} />
      <Route path="/juacode" element={<JuaCode />} />
    </Routes>
  </SpotifyProvider>
);

export default App;
