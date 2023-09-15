import { React, useState } from "react";
import negrito from "../../Assets/negrito.jpeg";
import polonia from "../../Assets/poloniaFinal.png";
import cali from "../../Assets/Screenshot from 2023-09-15 10-07-06.png";
import pipe from "../../Assets/Screenshot from 2023-09-15 10-11-59.png";
import nalita from "../../Assets/nalitaFinal.png";
import atenasUltima from "../../Assets/atenas-ultima.png";
import lalitoFinal from "../../Assets/lalitoFinal.jpeg";
import CardMedia from "@mui/material/CardMedia";
import styles from "./aboutStyle.css";

function Techstack() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <body>
      <article className="contenedor">
        <div
          style={{ border: "3px solid violet", borderRadius: "15%" }}
          class="violet-purple"
        >
          <CardMedia
            component="img"
            class="cardSize"
            image={atenasUltima}
            alt="green iguana"
          />
          <h5>Atenas</h5>
        </div>
        <div
          style={{ border: "3px solid violet", borderRadius: "15%" }}
          class="violet-purple"
        >
          <CardMedia
            component="img"
            class="cardSize"
            image={lalitoFinal}
            alt="green iguana"
          />
          <h5>Puppy</h5>
        </div>
        <div
          style={{ border: "3px solid violet", borderRadius: "15%" }}
          class="violet-purple"
        >
          <CardMedia
            component="img"
            class="cardSize"
            image={negrito}
            alt="green iguana"
          />
          <h5>Negrito</h5>
        </div>
        <div
          style={{ border: "3px solid violet", borderRadius: "15%" }}
          class="violet-purple"
        >
          <CardMedia
            component="img"
            class="cardSize"
            image={polonia}
            alt="green iguana"
          />
          <h5>Polonia</h5>
        </div>
        <div
          style={{ border: "3px solid violet", borderRadius: "15%" }}
          class="violet-purple"
        >
          <CardMedia
            component="img"
            class="cardSize"
            image={cali}
            alt="green iguana"
          />
          <h5>Cali</h5>
        </div>
        <div
          style={{ border: "3px solid violet", borderRadius: "15%" }}
          class="violet-purple"
        >
          <CardMedia
            component="img"
            class="cardSize"
            image={nalita}
            alt="green iguana"
          />
          <h5>Nalita</h5>
        </div>
        <div
          style={{ border: "3px solid violet", borderRadius: "15%" }}
          class="violet-purple"
        >
          <CardMedia
            component="img"
            class="cardSize"
            image={pipe}
            alt="green iguana"
          />
          <h5>Pipe</h5>
        </div>
      </article>
    </body>
  );
}

export default Techstack;
