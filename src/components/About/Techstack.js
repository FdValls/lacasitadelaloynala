import { React, useState } from "react";
import { Row } from "react-bootstrap";
import atenas from "../../Assets/atenas.png";
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
        <div style={{border: "3px solid violet"}} class="planta">
          <CardMedia 
            component="img"
               style={{ width: "120px", height: "140px" }}            // height="250"
            // image={atenas}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png"
            alt="green iguana"
          />
          <h5 style={{fontSize: "13px"}}>Bulbasaur</h5>
        </div>
        <div style={{border: "3px solid violet"}} class="planta">
          <CardMedia
            component="img"
              style={{ width: "120px", height: "140px" }}           // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png"
            alt="green iguana"
          />
          <h5 style={{fontSize: "13px"}}>Ivysaur</h5>
        </div>
        <div style={{border: "3px solid violet"}} class="planta">
          <CardMedia
            component="img"
              style={{ width: "120px", height: "140px" }}           // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/003.png"
            alt="green iguana"
          />
          <h5 style={{fontSize: "13px"}}>Venusaur</h5>
        </div>
        <div style={{border: "3px solid violet"}} class="fuego">
          <CardMedia
            component="img"
              style={{ width: "120px", height: "140px" }}           // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/004.png"
            alt="green iguana"
          />
          <h5 style={{fontSize: "13px"}}>Charmander</h5>
        </div>
        <div style={{border: "3px solid violet"}} class="fuego">
          <CardMedia
            component="img"
              style={{ width: "120px", height: "140px" }}           // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/005.png"
            alt="green iguana"
          />
          <h5 style={{fontSize: "13px"}}>Charmeleon</h5>
        </div>
        <div style={{border: "3px solid violet"}} class="fuego">
          <CardMedia
            component="img"
              style={{ width: "120px", height: "140px" }}           // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/006.png"
            alt="green iguana"
          />
          <h5 style={{fontSize: "13px"}}>Charizard</h5>
        </div>
        <div style={{border: "3px solid violet"}} class="agua">
          <CardMedia
            component="img"
              style={{ width: "120px", height: "140px" }}           // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/007.png"
            alt="green iguana"
          />
          <h5 style={{fontSize: "13px"}}>Squirtle</h5>
        </div>
        <div style={{border: "3px solid violet"}} class="agua">
          <CardMedia
            component="img"
              style={{ width: "120px", height: "140px" }}           // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/008.png"
            alt="green iguana"
          />
          <h5 style={{fontSize: "13px"}}>Wartortle</h5>
        </div>
        <div style={{border: "3px solid violet"}} class="agua">
          <CardMedia
            component="img"
              style={{ width: "120px", height: "140px" }}           // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/009.png"
            alt="green iguana"
          />
          <h5 style={{fontSize: "13px"}}>Blastoise</h5>
        </div>
      </article>
    </body>
  );
}

export default Techstack;
