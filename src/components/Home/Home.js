import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mainPhoto from "../../Assets/main-photo.jpeg";
import dog from "../../Assets/dog_bis.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About.js";
import styles from "./Home.module.css"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading ">
                Hola!!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 style={{ paddingBottom: 15 }} className="heading-name">
                Bienvenidos a{" "}
                <strong className="main-name">
                  {" "}
                  La casita de Lalo y Nala
                  <span className="wave" role="img" aria-labelledby="wave">
                  <img src={dog} />

                  </span>
                </strong>
              </h1>
              <br />
              <h1 className="heading-name">
                <p>
                  Mi nombre es <strong className="main-name"> Gabriela </strong>
                  , en "La casita de Lalo y Nala" cuidamos a los perritos cuando
                  sus humanos se van de vacaciones o requieran algunos días de
                  cuidado.
                </p>
              </h1>
              <div
                style={{
                  padding: 50,
                  textAlign: "left",
                  fontSize: "20px",
                  marginBottom: "10px",
                }}
              >
                <Type />
              </div>
            </Col>

            <Col
              md={5}
              style={{
                // paddingBottom: 20,
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              <img
                src={mainPhoto}
                alt="home pic"
                className={`img-fluid ${styles.circularImage}`}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Home2 />
    </section>
  );
}

export default Home;
