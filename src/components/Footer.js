import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    // <Container fluid className="footer">
    //   <Row>
    //     <Col md="4" className="footer-copywright"></Col>
    //     <section
    //       style={{
    //         display: "flex",
    //         flexDirection: "row",
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <Col md="4" className="footer-copywright">
    //         <h3>Copyright © {year} </h3>
    //         <h3>
    //           Core:{" "}
    //           <a href="https://github.com/sukrutrahane/Sukrut-Portfolio">
    //             Sukrut Rahane
    //           </a>{" "}
    //           || <span> Design: Fernando Valls</span>
    //         </h3>
    //       </Col>
    //     </section>
    //   </Row>
    // </Container>
    <footer className="footer mt-auto py-3 bg-black">
      <div className="container fw-bold fs-4 text-light">
        <span>Copyright © {year}</span> <br />
        Core:{" "}
        <a
          style={{ color: "violet" }}
          href="https://github.com/sukrutrahane/Sukrut-Portfolio"
        >
          {" "}
          Sukrut Rahane
        </a>{" "}
        || Design: <span style={{ color: "violet" }}> Fernando Valls</span>
      </div>
    </footer>
  );
}

export default Footer;
