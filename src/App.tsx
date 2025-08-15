import React, { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import { Row, Col } from "react-bootstrap";
import CustomNavbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import TechnicalHighlights from "./components/Highlights/TechnicalHighlights";
import FeaturedProjects from "./components/Projects/FeaturedProjects";
const Highlights = React.lazy(() => import("./pages/Highlights"));
const Extracurricular = React.lazy(() => import("./pages/Extracurricular"));
const ProjectsPage = React.lazy(() => import("./pages/Projects"));
const JuaCode = React.lazy(() => import("./pages/JuaCode"));
const TechnicalExperiencePage = React.lazy(() => import("./pages/Technical"));
import { SpotifyProvider } from "./contexts/SpotifyContext";
import "./styles/main.scss";

// Defer Google Analytics to after mount to keep it out of the initial bundle
const googleAnalyticsKey = import.meta.env.VITE_GOOGLE_ANALYTICS_KEY;
const useDeferredAnalytics = () => {
  useEffect(() => {
    if (!googleAnalyticsKey) return;
    // Dynamically import so GA is not part of the initial JS payload
    import("react-ga4").then((mod) => {
      const ReactGA = mod.default || mod;
      ReactGA.initialize(googleAnalyticsKey);
    }).catch(() => {
      // no-op on failure
    });
  }, []);
};

// Main portfolio component
const MainPortfolio: React.FC = () => {
  return (
    <>
      <CustomNavbar />
      {/* Keep spacer with the scrollable content */}
      <div className="app-container">
        <div className="navbar-spacer" aria-hidden />
        <Hero />
        <hr className="hero-about-divider" aria-hidden />
        <div className="content-container">
          <Layout>
            <Row className="g-3 align-items-stretch">
              <Col xs={12} lg={6}>
                <AboutMe />
              </Col>
              <Col xs={12} lg={6}>
                <TechnicalHighlights />
              </Col>
            </Row>
            <FeaturedProjects />
            <div
              className="cta-row"
              style={{
                marginBottom: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                justifyContent: 'center',
              }}
            >
              <a href="/projects" className="btn-gradient cta-extracurricular-btn" style={{ textDecoration: 'none', fontFamily: 'PT Sans, sans-serif', borderRadius: '25px' }}>
                View all projects <i className="fa fa-arrow-right blink-arrow"></i>
              </a>
            </div>
          </Layout>
        </div>
        <Footer />
      </div>
    </>
  );
};

const App: React.FC = () => {
  useDeferredAnalytics();
  return (
    <SpotifyProvider>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/technical" element={<TechnicalExperiencePage />} />
          <Route path="/extra-experience" element={<Extracurricular />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/juacode" element={<JuaCode />} />
        </Routes>
      </Suspense>
    </SpotifyProvider>
  );
};

export default App;
