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
