import React from "react";
import ReactGA from "react-ga4";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import CustomNavbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import ExperienceTimeline from "./components/ExperienceTimeline/ExperienceTimeline";
import Extracurricular from "./pages/Extracurricular";
import ProjectsShowcase from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import ChatbotEmbed from "./components/Embeds/ChatbotEmbed";
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
      <Hero />
      <div className="content-container">
        <Layout>
          <AboutMe />
          <ExperienceTimeline />
        </Layout>
      </div>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button
          type="button"
          className="btn btn-primary cta-extracurricular-btn"
          onClick={() => navigate("/extra-experience")}
        >
          View Extracurricular Experience <i className="fa fa-arrow-right"></i>
        </button>
      </div>
      <ProjectsShowcase />
      {/* Chatbot embed (Netlify-hosted) */}
      <div className="embed-row">
        <ChatbotEmbed title="Assistant Chatbot" />
      </div>
      <div className="spotify-embed" style={{ textAlign: "center" }}>
        <h5>
          <a href="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&redirect=true" target="_blank" rel="noopener noreferrer" aria-label="Open Spotify profile">
            <i>
              <img loading="lazy" src="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&cover_image=true&theme=novatorem&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false" alt="Spotify now playing widget"></img>
            </i>
          </a>
        </h5>
      </div>
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainPortfolio />} />
    <Route path="/extra-experience" element={<Extracurricular />} />
  </Routes>
);

export default App;
