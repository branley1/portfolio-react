import React from "react";
import { Row, Col, Button } from "react-bootstrap";

interface ProjectCardProps {
  name: string;
  technologies: string;
  date: string;
  description: string;
  links: {
    live?: string; // Optional live site link
    github?: string; // Optional GitHub link
  };
  isFeatured?: boolean; // Optional boolean to indicate if the project is featured
  // no interactive props needed for hover expansion
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  technologies,
  date,
  description,
  links,
  isFeatured,
}) => (
  <div
    className="project-card"
  >
    {/* Render custom live button for site */}
    <h3>{name}</h3>
    <p>
      <strong>Technologies:</strong> {technologies}
    </p>
    <p>
      <strong>Date:</strong> {date}
    </p>
    <p>{description}</p>
    <div className={`links ${isFeatured ? "featured-links" : ""}`}>
      {isFeatured && links.live && (
        <Button
          variant="outline-secondary"
          className="btn-gradient live-button"
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </Button>
      )}
      {/* Use default Button for GitHub link or regular projects */}
      {links.github && (
        <Button
          variant="outline-secondary"
          className="btn-gradient github-button"
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      )}
    </div>
  </div>
);

const projects = [
  {
    name: "JuaCode AI Coding Assistant",
    technologies:
      "React (HTML/CSS, JavaScript), Node.js/Express, Supabase, Deepseek-r1, OpenAI, Gemini API",
    date: "Jan. 2025 - Present",
    description:
      "Full-stack AI coding assistant with real-time multi-model chat, contextual code suggestions, secure auth, persistent history, and a responsive dark/light UI.",
    links: {
      github: "https://github.com/branley1/juacode-ai",
      live: "https://juacode.netlify.app/",
    },
  },
  {
    name: "Bmmasi Portal",
    technologies: "React (TypeScript, HTML, SCSS, JavaScript)",
    date: "Nov. 2024 - Present",
    description:
      "A responsive portfolio website showcasing my projects and skills, built with React and TypeScript.",
    links: {
      live: "https://bmmasi.com",
      github: "https://github.com/branley1/portfolio-react",
    },
  },
  {
    name: "TerraTune",
    technologies: "React, Node.js, Express, PostgreSQL, Redis, Web Audio API",
    date: "Apr. 2025 - Present",
    description:
      "A modern web-based music streaming service with features including user authentication, playlist management, music streaming with HTML5 Audio API, search functionality, and real-time audio visualizations.",
    links: {
      github: "https://github.com/branley1/terratune",
      live: "https://uithub.com/branley1/terratune"
    },
    isFeatured: true,
  },
  {
    name: "Cue List",
    technologies:
      "HTML5, CSS3, JavaScript (ES6+), Local Storage API",
    date: "Mar. 2025 - Present",
    description:
      "An easy-to-use task management app with priority-based sorting and deadline tracking to help me stay on top of my tasks.",
    links: {
      github: "https://github.com/branley1/cue-list",
    },
  },
  {
    name: "Moodi-fi",
    technologies:
      "React (TypeScript, HTML, SCSS, JavaScript), MongoDB, Spotify WebAPI, Gemini 2.0 API, Gemini 1.5 API",
    date: "Dec. 2024 - Present",
    description:
      "Currently working on a tool that let's users login to their Spotify, get detailed summaries of their listening and generate mood playlists based on text (coming soon: multimodal).",
    links: {
      github: "https://github.com/branley1/moodi-fi",
    },
  },
  {
    name: "Deepseek-r1 with RAG",
    technologies: "Python, Jupyter Notebook",
    date: "Dec. 2024 - Present",
    description:
      "Engineered a chatbot application leveraging the open-source Deepseek-r1 reasoning model to deliver context-rich, privacy-preserving local AI interactions using Knowledge Augmented Generation (KAG) framework.",
    links: {
      github: "https://github.com/branley1/deepseek-r1",
    },
  },
  {
    name: "Sentimental Analysis with GRUs",
    technologies: "Python, TensorFlow, Keras",
    date: "Mar. 2024 - May 2024",
    description:
      "A GRU-based neural network for emotion classification from text, achieving 93% accuracy on a dataset of 70,000 tweets.",
    links: {
      github: "https://github.com/branley1/Predicting-emotions-with-GRUs.git",
    },
  },
  {
    name: "Multi-label Classification with k-NN",
    technologies: "Python, Scikit-learn",
    date: "Oct. 2023 - Dec. 2023",
    description:
      "A custom k-NN algorithm for multi-label classification with feature weighting, applied to molecular data analysis.",
    links: {
      github:
        "https://github.com/branley1/Multi-label-Classification-with-k-Nearest-Neighbor.git",
    },
  },
  {
    name: "iOS Flashcard Application",
    technologies: "Swift, Xcode, SnapKit",
    date: "Feb. 2022 - Feb. 2024",
    description:
      "An iOS app for flashcard management with a responsive UI, local data persistence, and extensible architecture.",
    links: {
      github: "https://github.com/branley1/flashcard-update.git",
    },
  },
  {
    name: "A Smol Course",
    technologies: "Python, Google Colab, OpenAI, Hugging Face",
    date: "Dec. 2024 - Present",
    description:
      "A practical, community-driven course on aligning small language models for domain-specific applications, providing a hands-on approach to working with small language models from initial training to production deployment.",
    links: {
      github: "https://github.com/branley1/smol-course.git",
    },
  },
  {
    name: "Simple Multi-Band Compressor Plugin",
    technologies: "C++, JUCE, Xcode, Fork",
    date: "Nov. 2024 - Present",
    description:
      "A simple multi-band compressor plugin built with JUCE, Xcode and C++ based off freeCodeCamp's tutorial.",
    links: {
      github: "https://github.com/branley1/",
    },
  },
  {
    name: "Google AI Studio Set up",
    technologies:
      "Gemini 2.0 API, Google AI Studio, Google Colab, Jupyter Notebook",
    date: "Dec. 2024 - Dec. 2024",
    description: "API setup for aistudio.google.com.",
    links: {
      github: "https://github.com/branley1/aistudio.google.com.git",
    },
  },
];

const ProjectsShowcase: React.FC = () => {
  return (
    <section id="custom-projects" className="projects-section my-1">
      <h2>Projects</h2>
      <Row className="g-4 justify-content-left project grid">
        {projects.map((project, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
            <ProjectCard
              key={index}
              {...project}
              isFeatured={index === 0}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ProjectsShowcase;
