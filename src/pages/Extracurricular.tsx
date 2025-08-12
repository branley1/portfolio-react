import React from "react";
import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ExtraExperience from "../components/ExtraExperience/ExtraExperience";
import ChatbotEmbed from "../components/Embeds/ChatbotEmbed";
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
        <a href="/technical" className="btn-gradient cta-extracurricular-btn">
          View Technical Experience <i className="fa fa-arrow-right blink-arrow"></i>
        </a>
      </div>
      {/* Render chatbot if VITE_CHATBOT_URL or explicit src is available */}
      <div className="embed-row">
        <ChatbotEmbed title="Assistant Chatbot" />
      </div>
      <Footer />
    </div>
  );
};

export default Extracurricular;
