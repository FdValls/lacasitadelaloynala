import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
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
