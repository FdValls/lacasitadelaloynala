import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import gaby from "../../Assets/gaby_photo.jpeg";

import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "3.1em", paddingBottom: "20px" }}>
              <strong className="purple">Petit hotel canino</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={4}
            className="img-fluid circular-image"
          >
            <img
              style={{ borderRadius: "60%", width: "250px", height: "250px", alignSelf: "center" }}
              src={gaby}
              className="img-fluid border-violeta"
              alt="avatar"
            />
          </Col>
        </Row>
        <h1 style={{ marginTop: "100px" }} className="project-heading">
          Algunos de nuestros{" "}
          <strong id="huespedes" style={{ color: "violet" }}>HUÉSPEDES </strong>
        </h1>

        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
