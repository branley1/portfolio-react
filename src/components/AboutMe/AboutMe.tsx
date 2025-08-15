import React from "react";
import "./_about-me.scss";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="my-3 about-me">
      <div className="about-content">
      <h2>hi!</h2>
      <p>i build software that helps people do things.<br />sometimes it helps me too.</p>

      <p>right now, most of my time's going into <strong>juacode</strong>.<br />here's an embedded demo.</p>
      <div style={{ margin: '0.5rem 0 0.75rem' }}>
        <a href="/juacode" className="btn-gradient cta-extracurricular-btn" style={{ textDecoration: 'none', fontFamily: 'PT Sans, sans-serif', borderRadius: '25px' }}>
          <img
            src="/icon-64.png"
            alt="JuaCode logo"
            width={16}
            height={16}
            style={{ marginRight: '2px', verticalAlign: 'text-bottom', marginTop: '2px'}}
          />
          Try JuaCode <i className="fa fa-arrow-right blink-arrow"></i>
        </a>
      </div>
      <p><i>it might help you too.</i></p>

      <p>i'm passionate about applying nlp to uncover implicit patterns in large datasets and build human-centered applications.</p>
      <p><b>big picture:</b> bridging the gap between machines and humans to foster intuitive, meaningful connections.</p>
      <p>computers should feel more like collaborators than tools.</p>

      <h5>stuff i work on:</h5>
      <ul>
        <li>full-stack engineering</li>
        <li>ml, ai & nlp</li>
        <li>fintech</li>
        <li>ios/android dev</li>
      </ul>

      <h5>stuff i've been doing:</h5>
      <ul>
        <li>fine-tuning local LLMs & shipping an AI chatbot end-to-end</li>
        <li>exploring compilers with OCaml</li>
        <li>building a multiband compressor in C++ with JUCE</li>
      </ul>

      <p>if you like building useful things, let's chat.</p>
      <p>oh—and i make music too.</p>
      </div>
    </section>
  );
};

export default AboutMe;
