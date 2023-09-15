import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} </h3>
            <h3>
              Core:{" "}
              <a href="https://github.com/sukrutrahane/Sukrut-Portfolio">
                Sukrut Rahane
              </a>{" "}
              || <span> Design: Fernando Valls</span>
            </h3>
          </Col>
        </section>
      </Row>
    </Container>
  );
}

export default Footer;
