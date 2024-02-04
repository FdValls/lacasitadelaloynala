import React from "react";
import Card from "react-bootstrap/Card";
import { ImHeart, ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0 ">
          <br />
          <ul style={{ fontSize: "25px" }}>
            <li className="about-activity">
              <ImHeart className="wave" /> Atención personalizada
            </li>
            <li className="about-activity">
              <ImHeart className="wave" /> Máximo un perrito por estadía
            </li>
            <li className="about-activity">
              <ImHeart className="wave" /> Reporte diario
            </li>
            <li className="about-activity">
              <ImHeart className="wave" /> Aceptamos perritos medianos y
              pequeños
            </li>
            <li className="about-activity">
              <ImHeart className="wave" /> Estamos ubicados en el barrio de
              Villa Urquiza
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
