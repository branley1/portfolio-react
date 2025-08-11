import React from "react";
import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ExtraExperience from "../components/ExtraExperience/ExtraExperience";
import ChatbotEmbed from "../components/Embeds/ChatbotEmbed";
import "./Extracurricular.scss";

const Extracurricular: React.FC = () => {
  return (
    <div className="app-container page-extracurricular">
      <CustomNavbar />
      <div className="navbar-spacer" aria-hidden />
      <div className="content-container">
        <ExtraExperience />
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
