import React from "react";
import { useNavigate } from "react-router-dom";
import "./_about-me.scss";

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

      <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        <button
          type="button"
          className="btn btn-primary cta-extracurricular-btn"
          onClick={() => navigate("/projects")}
        >
          View Projects <i className="fa fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
