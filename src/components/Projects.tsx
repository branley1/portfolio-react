import React from "react";
import { Card, Button } from "react-bootstrap";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, link }) => (
  <Card
    style={{ width: "18rem", fontFamily: "'IBM Plex Mono', monospace" }}
    className="mb-4"
  >
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary" href={link} target="_blank">
        View Project
      </Button>
    </Card.Body>
  </Card>
);

const ProjectsShowcase: React.FC = () => (
  <section id="projects" className="my-4">
    <h2>Projects</h2>
    <div className="d-flex flex-wrap justify-content-around">
      <ProjectCard
        title="Portfolio Website"
        description="A personal portfolio built with React and TypeScript.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem
        dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum
        laoreet convallis non sed purus. Ut porta accumsan est quis placerat.
        Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac
        hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna
        convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet
        mi."
        link="https://github.com"
      />
      <ProjectCard
        title="Portfolio Website"
        description="A personal portfolio built with React and TypeScript.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem
        dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum
        laoreet convallis non sed purus. Ut porta accumsan est quis placerat.
        Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac
        hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna
        convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet
        mi."
        link="https://github.com"
      />
      <ProjectCard
        title="Portfolio Website"
        description="A personal portfolio built with React and TypeScript.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem
        dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum
        laoreet convallis non sed purus. Ut porta accumsan est quis placerat.
        Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac
        hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna
        convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet
        mi."
        link="https://github.com"
      />
      <ProjectCard
        title="Portfolio Website"
        description="A personal portfolio built with React and TypeScript. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem
        dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum
        laoreet convallis non sed purus. Ut porta accumsan est quis placerat.
        Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac
        hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna
        convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet
        mi."
        link="https://github.com"
      />
      <ProjectCard
        title="E-commerce Platform"
        description="A full-stack e-commerce solution with modern UI/UX. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem
        dolor, feugiat at egestas eu, convallis id urna. Donec ac dui ac ipsum
        laoreet convallis non sed purus. Ut porta accumsan est quis placerat.
        Aliquam scelerisque faucibus tincidunt. Duis leo quam, fringilla ac
        hendrerit a, luctus sit amet libero. Suspendisse a tortor eu magna
        convallis congue ac quis nisi. Nullam eget mi orci. Donec vel imperdiet
        mi."
        link="https://github.com"
      />
    </div>
  </section>
);

export default ProjectsShowcase;
