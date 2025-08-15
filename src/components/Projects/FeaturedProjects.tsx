import React from "react";
import { Row, Col } from "react-bootstrap";
import { projects, ProjectCard } from "./Projects";

const FeaturedProjects: React.FC = () => {
  const featured = projects.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section id="featured-projects" className="projects-section my-1">
      <h2>stuff i've built:</h2>
      <Row className="g-4 justify-content-left project grid">
        {featured.map((project, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
            <ProjectCard {...project} isFeatured />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default FeaturedProjects;


