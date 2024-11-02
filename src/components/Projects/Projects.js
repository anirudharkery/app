import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

// Define project images at the top level
// const PROJECT_IMAGES = {
//   placeholder: "/api/placeholder/400/320"  // Using default placeholder
// };

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          As a CS Grad I like to post the projects that I have done as a part of course and aswell in spare time here
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PROJECT_IMAGES.placeholder}
              isBlog={false}
              title="Face Detection and Attendance System"
              description="Hackathon project for automated attendance tracking using facial recognition technology. The system efficiently processes and logs attendance using advanced face detection algorithms."
              ghLink="https://github.com/anirudharkery/face_mapping_2019-Hackathon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={PROJECT_IMAGES.placeholder}
              isBlog={false}
              title="Celebrity Buzzer"
              description="Mobile application for celebrity-related interactions. A comprehensive platform that enables users to engage with celebrity content and receive real-time updates about their favorite personalities."
              ghLink="https://github.com/anirudharkery/Celebrity-buzzer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={PROJECT_IMAGES.placeholder}
              isBlog={false}
              title="Parking Locator App"
              description="Application to help users locate and navigate to parking spots. Features real-time availability updates, navigation assistance, and user-friendly interface for seamless parking experiences."
              ghLink="https://github.com/anirudharkery/Parking-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={PROJECT_IMAGES.placeholder}
              isBlog={false}
              title="MEDI-360"
              description="Comprehensive medical management platform designed to streamline healthcare processes. Integrates patient records, appointment scheduling, and medical resource management into a unified system."
              ghLink="https://github.com/anirudharkery/MEDI-360"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

// ProjectCard component
const ProjectCard = ({ imgPath, title, description, ghLink, demoLink }) => {
  return (
    <div className="project-card-view">
      <img src={imgPath} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="button-group">
          <a href={ghLink} target="_blank" rel="noreferrer" className="btn btn-primary">
            GitHub
          </a>
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noreferrer" className="btn btn-secondary">
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
