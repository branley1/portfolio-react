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
        <p>i build software that helps people do things. <br />sometimes it even helps me too.</p>
        <p>right now, most of my time's going into <strong>juacode</strong>. <br />you'll see links scattered around, try it. </p>
        <p>it might help you too, <i>or it might not.</i></p>

        <p>i'm into natural language processing for finding hidden <br />patterns in text and turning them into human-centered apps. </p>
        <p>big picture: making computers feel more like collaborators <br />than tools.</p>

        <p>stuff i work on:</p>
        <ul>
          <li>full-stack engineering</li>
          <li>machine learning & NLP</li>
          <li>fintech</li>
          <li>ios/android dev</li>
        </ul>

        <p>stuff i've been doing:</p>
        <ul>
          <li>fine-tuning local LLMs & shipping an AI chatbot end-to-end</li>
          <li>exploring compilers with OCaml</li>
          <li>building a multiband compressor in C++ with JUCE</li>
        </ul>

        <p>if you like building useful things, i'm always happy to chat.</p>
        <p>if you like making things, let's talk.</p>
        <p>oh—and i make music too.</p>
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
