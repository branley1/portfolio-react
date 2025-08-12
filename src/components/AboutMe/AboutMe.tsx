import React from "react";
import { useNavigate } from "react-router-dom";
import "./_about-me.scss";
import JuaCodeLogo from "../../assets/images/icon-64.png"

const AboutMe: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="my-3 about-me">
      <h2>hi!</h2>
      <p>i build software that helps people do things.</p>
      <p>sometimes, the software helps me do things.</p>
      <p>i'm currently working on JuaCode, and you can find links plastered all over this site.</p>
      <p>try it out and build things.</p>
      <p>it may help you do things too.</p>
      <ul>
        <li>Fine-tuning local LLMs and shipping an AI chatbot end-to-end</li>
        <li>Exploring compilers with OCaml</li>
        <li>Prototyping audio tools with JUCE</li>
      </ul>
      <h5>Interests</h5>
      <ul>
        <li>Full-stack engineering (TypeScript/React, APIs, infrastructure)</li>
        <li>iOS/Android development</li>
        <li>Machine Learning & NLP</li>
        <li>Fintech and data-driven systems</li>
        <li>Cloud & DevOps</li>
      </ul>
      <p>if you're into building things people actually need & use, i'm always happy to chat.</p>
      <p>oh btw, i make music!</p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", marginTop: "1rem" }}>
        <button 
          type="button"
          className="btn-gradient cta-extracurricular-btn" 
          style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}
          onClick={() => navigate("/juacode")}
        >
          <img
            src={JuaCodeLogo}
            alt="JuaCode logo"
            width={16}
            height={16}
            style={{ marginRight: '2px', verticalAlign: 'text-bottom', marginTop: '2px'}}
          />
          Try JuaCode <i className="fa fa-arrow-right blink-arrow"></i>
        </button>
        <button
          type="button"
          className="btn-gradient cta-extracurricular-btn"
          onClick={() => navigate("/projects")}
        >
          View Projects <i className="fa fa-arrow-right blink-arrow"></i>
        </button>
        <button
          type="button"
          className="btn-gradient cta-extracurricular-btn"
          onClick={() => navigate("/technical")}
        >
          View Technical Experience <i className="fa fa-arrow-right blink-arrow"></i>
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
