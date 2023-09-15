import { React, useState } from "react";
import { Row } from "react-bootstrap";
import atenas from "../../Assets/atenas.png";
import negrito from "../../Assets/negrito.jpeg";
// import polonia from "../../Assets/polonia.jpeg";
import polonia from "../../Assets/poloniaFinal.png";
import lalo from "../../Assets/lalo.jpeg";
// import cali from "../../Assets/cali.jpeg";
import cali from "../../Assets/Screenshot from 2023-09-15 10-07-06.png";
import pipe from "../../Assets/Screenshot from 2023-09-15 10-11-59.png";
import nalita from "../../Assets/nalitaFinal.png";
import atenasUltima from "../../Assets/atenas-ultima.png";
import lalitoFinal from "../../Assets/lalitoFinal.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
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
        {/* <img  style={{ width: "120px", height: "140px" }} src={negrito}/>
        <img  style={{ width: "120px", height: "140px" }} src={polonia}/>
        <img  style={{ width: "120px", height: "140px" }} src={polonia}/>
        <img  style={{ width: "120px", height: "140px" }} src={lalo}/>
        <img  style={{ width: "120px", height: "140px" }} src={cali}/>
        <img  style={{ width: "120px", height: "140px" }} src={cali}/>
        <img  style={{ width: "120px", height: "140px" }} src={cali}/>
        <img  style={{ width: "120px", height: "140px" }} src={cali}/>
        <img  style={{ width: "120px", height: "140px" }} src={cali}/>
        <img  style={{ width: "120px", height: "140px" }} src={negrito}/> */}
        <div
          style={{ border: "3px solid violet", borderRadius: "15%" }}
          class="violet-purple"
        >
          <CardMedia
            component="img"
            class="cardSize"
            // image={atenas}
            // image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png"
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
          <h5>Nalita</h5>
        </div>
      </article>
    </body>
  );
}

export default Techstack;
