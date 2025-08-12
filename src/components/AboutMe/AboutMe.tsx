import React from "react";
import { useNavigate } from "react-router-dom";
import "./_about-me.scss";
import JuaCodeLogo from "../../assets/images/icon-64.png"

const AboutMe: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="my-3 about-me">
      <div className="about-content">
        <h2>hi!</h2>
        <p>i build software that helps people do things.</p>
        <p>sometimes, it helps me do things too.</p>
        <p>right now, i'm pouring my time into juacode.</p>
        <p>you'll find links plastered all over this site.</p>
        <p>give it a try if you like making things, and let's talk.</p> 

        <p>my interests include:</p>
          <ul>
            <li>full-stack engineering (typescript/react, APIs, infrastructure)</li>
            <li>ios/android dev</li>
            <li>machine learning & NLP</li>
            <li>fintech</li>
            <li>data systems</li>
            <li>cloud/devops</li>
          </ul> 
        <p>lately, i've been:</p>
        <ul>
          <li>fine-tuning local LLMs & shipping an AI chatbot end-to-end</li>
          <li>exploring compilers with OCaml</li>
          <li>building a simple multiband compressor in C++ with JUCE</li>
        </ul>
        <p>if you're into building things people actually need & use, i'm always happy to chat.</p>
        <p>oh, and i make music too.</p>
      </div>

      <aside className="about-cta-group" aria-label="Quick navigation">
        <button 
          type="button"
          className="btn-gradient cta-extracurricular-btn"
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
      </aside>
    </section>
  );
};

export default AboutMe;
