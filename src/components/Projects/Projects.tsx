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
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  technologies,
  date,
  description,
  links,
  isFeatured,
}) => (
  <div className="project-card">
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
          className="live-button"
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Live Site
        </Button>
      )}
      {/* Use default Button for GitHub link or regular projects */}
      {links.github && (
        <Button
          className="github-button"
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </Button>
      )}
    </div>
  </div>
);

const projects = [
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
    name: "My Spotify Listening Insights",
    technologies: "Python, Jupyter Notebook",
    date: "Dec. 2024 - Present",
    description:
      "Analysis of my Spotify data since I installed the app in 2021! I dive into: when I listen the most, my top artists and why I love them, listening streaks, trends over time (does my music taste evolve or do I stick to my classics?) and literally anything I can get from my data!!",
    links: {
      github: "https://github.com/branley1/spotify-parse",
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

const ProjectsShowcase: React.FC = () => (
  <section id="custom-projects" className="projects-section my-4">
    <h2>Projects</h2>
    <Row className="g-4 justify-content-left project grid">
      {projects.map((project, index) => (
        <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
          <ProjectCard key={index} {...project} isFeatured={index === 0} />
        </Col>
      ))}
    </Row>
  </section>
);

export default ProjectsShowcase;
