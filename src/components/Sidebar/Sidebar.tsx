import React from "react";
import { Card } from "react-bootstrap";
import "./_sidebar.scss";
// import profileImage from "../../assets/images/sidebar/sidebargif.webp";
// import courseImage from "../../assets/images/sidebar/education.jpg";
// import lastImage from "../../assets/images/sidebar/qr-code.png";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => (
  <div className={`sidebar ${className}`}>
    <Card className="sidebar-card">
      <h5>
        Vibe with Me! 🎧
        <a
          href="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&redirect=true"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Spotify profile"
        >
          <i>
            <img
              loading="lazy"
              src="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=hvoh3gwfkd3h64bzeal1fejmu&cover_image=true&theme=default&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false"
              alt="Spotify now playing widget"
            ></img>
          </i>
        </a>
      </h5>
      <Card.Body>
        <Card.Title>Technical Skills</Card.Title>
        <ul className="skills-list">
          <li>
            <strong>Machine Learning: </strong>
            <span>
              Scikit-learn, Keras, TensorFlow, PyTorch, XGBoost, OpenAI API, Hugging Face, Gemini API, OpenRouter, Anthropic API, DashScope API, LangChain
            </span>
          </li>
          <li>
            <strong>Languages: </strong>
            <span>
              C++, C, Python, Swift, Java, R, Go, OCaml, JavaScript, TypeScript, HTML/CSS
            </span>
          </li>
          <li>
            <strong>Frameworks: </strong>
            <span>
              React Native, React, Next.js, Vue.js, Vite, Node.js, Flask, Django, SwiftUI
            </span>
          </li>
          <li>
            <strong>Database: </strong>
            <span>MySQL, PostgreSQL, SQLAlchemy, MongoDB, Firebase, SQLite</span>
          </li>
          <li>
            <strong>Tools: </strong>
            <span>
              gRPC, REST APIs, Git/GitHub, RabbitMQ, Xcode, Apache Flume, Jupyter Notebook, GCP, AWS, WebAPIs, Google Colab, RPC APIs, Websocket APIs
            </span>
          </li>
        </ul>
        <Card.Title>Coursework</Card.Title>
        <ul className="course-highlight">
          <li>
            <strong>Computer Science:</strong>
            <ul>
              <li>CPSC 021: Intro to Computer Science</li>
              <li>CPSC 031: Intro to Computer Systems</li>
              <li>CPSC 035: Data Structures and Algorithms</li>
              <li>CPSC 041: Algorithms</li>
              <li>CPSC 046: Theory of Computation</li>
              <li>CPSC 063: Artificial Intelligence</li>
              <li>CPSC 066: Machine Learning</li>
              <li>CPSC 071: Software Engineering</li>
              <li>CPSC 075: Compilers</li>
              <li>CPSC 099: Senior Comprehensive</li>
            </ul>
          </li>
          <li>
            <strong>Math & Statistics:</strong>
            <ul>
              <li>MATH 015: Single-variable Calculus I</li>
              <li>MATH 025: Single-variable Calculus II</li>
              <li>MATH 027: Linear Algebra</li>
              <li>MATH 039: Discrete Mathematics</li>
              <li>STAT 011: Statistical Methods I</li>
            </ul>
          </li>
          <li>
            <strong>Cognitive Science & Psychology:</strong>
            <ul>
              <li>COGS 001: Intro to Cognitive Science</li>
              <li>PSYC 001: Intro to Psychology</li>
              <li>PSYC 034: Psychology of Language</li>
              <li>PSYC 033: Cognitive Psychology</li>
              <li>PSYC 035: Social Psychology</li>
            </ul>
          </li>
          <li>
            <strong>Philosophy:</strong>
            <ul>
              <li>PHIL 001A: Intro to Philosophy</li>
              <li>PHIL 012B: Logic</li>
              <li>PHIL 034: Marx and Marxism</li>
              <li>PHIL 079: Poststructuralism</li>
              <li>PHIL 053: Indian Philosophy</li>
            </ul>
          </li>
          <li>
            <strong>Music:</strong>
            <ul>
              <li>MUSC 002B: Reading & Making Music: Basics of Notation</li>
              <li>MUSC 003A: Intro to Music Technology</li>
              <li>MUSC 119: Composition</li>
            </ul>
          </li>
          <li>
            <strong>
              Linguistics, Economics, Political Science, Theatre, English &
              Religion:
            </strong>
            <ul>
              <li>LING 001: Intro to Linguistics</li>
              <li>ECON 001: Intro to Economics</li>
              <li>POLS 004: Intro to International Relations</li>
              <li>ENGL 001F: FYS: Transition to College Writing (W)</li>
              <li>THEA 002A: Acting I</li>
              <li>RELG 073: Namaste America</li>
            </ul>
          </li>
        </ul>
        <Card.Link href="https://linkedin.com/in/bmmasi1">LinkedIn</Card.Link>
        <Card.Link href="https://github.com/branley1">GitHub</Card.Link>
      </Card.Body>
    </Card>
  </div>
);

export default Sidebar;
