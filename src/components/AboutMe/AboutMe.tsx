import React from "react";
import { useNavigate } from "react-router-dom";
import "./_about-me.scss";
import JuaCodeLogo from "../../../public/icon-64.png"

const AboutMe: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="my-4 about-me">
      <h2>Hi there!</h2>
      <p>I build reliable, human-centered software and love using machine learning to turn messy, real‑world data into useful products. My work spans from front‑end experiences to the systems that power them.</p>
      <p>Right now, I'm focused on a few things:</p>
      <ul>
        <li>Fine-tuning local LLMs and shipping an AI chatbot end-to-end</li>
        <li>Exploring compilers with OCaml to deepen language and systems fundamentals</li>
        <li>Prototyping audio tools with JUCE because building for sound is fun</li>
      </ul>
      <h5>Interests</h5>
      <ul>
        <li>Full-stack engineering (TypeScript/React, APIs, infrastructure)</li>
        <li>iOS/Android development</li>
        <li>Machine Learning & NLP</li>
        <li>Fintech and data-driven systems</li>
        <li>Cloud & DevOps</li>
      </ul>
      <p>I enjoy collaborating on open source and building things people actually use. If you're into AI agents, product engineering, or data tooling, I'm always happy to chat.</p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", marginTop: "1rem" }}>
        <button className="btn-gradient cta-extracurricular-btn" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
        <a className="nav-link" href="/juacode">
              <img
                src={JuaCodeLogo}
                alt="JuaCode logo"
                width={16}
                height={16}
                style={{ marginRight: '2px', verticalAlign: 'text-bottom', marginTop: '2px'}}
              />
              Try JuaCode <i className="fa fa-arrow-right blink-arrow"></i>
            </a>
        </button>
        <button
          type="button"
          className="btn-gradient cta-extracurricular-btn"
          onClick={() => navigate("/projects")}
        >
          View Projects <i className="fa fa-arrow-right blink-arrow"></i>
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
