import React from "react";
import ReactGA from "react-ga4";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import CustomNavbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import ExperienceTimeline from "./components/ExperienceTimeline/ExperienceTimeline";
import ExtraExperience from "./components/ExtraExperience/ExtraExperience";
import ProjectsShowcase from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./styles/main.scss";

// Initialize Google analytics
const googleAnalyticsKey = import.meta.env.VITE_GOOGLE_ANALYTICS_KEY;
if (googleAnalyticsKey) {
  ReactGA.initialize(googleAnalyticsKey);
}

// Main portfolio component
const MainPortfolio: React.FC = () => (
  <div className="app-container">
    <CustomNavbar />
    <Hero />
    <div className="content-container">
      <Layout>
        <AboutMe />
        <ExperienceTimeline />
        <ExtraExperience />
      </Layout>
    </div>
    <ProjectsShowcase />
    <div className="spotify-embed" style={{ textAlign: "center" }}>
      <h5>
        <a><i>
          <img src="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&cover_image=true&theme=novatorem&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false"></img>
        </i></a>
      </h5>
    </div>
    <Footer />
  </div>
);

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainPortfolio />} />
  </Routes>
);

export default App;
