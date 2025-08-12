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
        <p>give it a try, and if you like making things, let's talk.</p> 
        <p>lately, i've been:</p>
        <ul>
          <li>fine-tuning local LLMs & shipping an AI chatbot end-to-end</li>
          <li>exploring compilers with OCaml</li>
          <li>building a simple multiband compressor with JUCE and C++</li>
        </ul>
        <p>my interests include full-stack engineering (typescript/react, APIs, infrastructure), ios/android dev, machine learning & NLP, fintech, data systems, and cloud/devops.</p>
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
