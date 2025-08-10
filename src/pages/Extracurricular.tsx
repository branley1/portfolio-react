import React from "react";
import CustomNavbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ExtraExperience from "../components/ExtraExperience/ExtraExperience";
import ChatbotEmbed from "../components/Embeds/ChatbotEmbed";

const Extracurricular: React.FC = () => (
  <div className="app-container page-extracurricular">
    <CustomNavbar />
    <div className="content-container">
      <ExtraExperience />
    </div>
    {/* Spotify embed (same as main App) */}
    <div className="spotify-embed" style={{ textAlign: "center" }}>
      <h5>
        <a
          href="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&redirect=true"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Spotify profile"
        >
          <i>
            <img
              loading="lazy"
              src="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&cover_image=true&theme=novatorem&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false"
              alt="Spotify now playing widget"
            />
          </i>
        </a>
      </h5>
    </div>
    {/* Render chatbot if VITE_CHATBOT_URL or explicit src is available */}
    <div className="embed-row">
      <ChatbotEmbed title="Assistant Chatbot" />
    </div>
    <Footer />
  </div>
);

export default Extracurricular;
