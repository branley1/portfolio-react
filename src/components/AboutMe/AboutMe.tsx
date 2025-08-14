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
        <p>i build software that helps people do things. <br />sometimes it helps me too.</p>
        <p>right now, most of my time's going into <strong>juacode</strong>. 
        <br />you'll see links scattered around, try it. </p>
        <p><i>it might help you too.</i></p>
        <p>i'm passionate about applying nlp to reveal implicit 
          <br />patterns within large datasets and creating human-
        <br />centered applications.</p>
        <p><b>big picture:</b> bridge gap between machines and humans, 
          <br />foster intuitive and meaningful connections.</p>
        <p>computers should feel more like collaborators than tools.</p>
        <p>stuff i work on:</p>
        <ul>
          <li>full-stack engineering</li>
          <li>ml, ai & nlp</li>
          <li>fintech</li>
          <li>ios/android dev</li>
        </ul>
        <p>stuff i've been doing:</p>
        <ul>
          <li>fine-tuning local LLMs & shipping an AI chatbot end-to-end</li>
          <li>exploring compilers with OCaml</li>
          <li>building a multiband compressor in C++ with JUCE</li>
        </ul>

        <p>if you like building useful things, let's chat.</p>
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
          onClick={() => navigate("/technical")}
        >
          View Technical Experience <i className="fa fa-arrow-right blink-arrow"></i>
        </button>
      </aside>
    </section>
  );
};

export default AboutMe;
