import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={placeholderImg}
              isBlog={false}
              title="Face Detection and Attendance System"
              description="Hackathon project for automated attendance tracking using facial recognition technology. The system efficiently processes and logs attendance using advanced face detection algorithms."
              ghLink="https://github.com/anirudharkery/face_mapping_2019-Hackathon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg}
              isBlog={false}
              title="Celebrity Buzzer"
              description="Mobile application for celebrity-related interactions. A comprehensive platform that enables users to engage with celebrity content and receive real-time updates about their favorite personalities."
              ghLink="https://github.com/anirudharkery/Celebrity-buzzer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg}
              isBlog={false}
              title="Parking Locator App"
              description="Application to help users locate and navigate to parking spots. Features real-time availability updates, navigation assistance, and user-friendly interface for seamless parking experiences."
              ghLink="https://github.com/anirudharkery/Parking-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={placeholderImg}
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

export default Projects;
