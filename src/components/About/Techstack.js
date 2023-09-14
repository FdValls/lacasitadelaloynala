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
        <div class="planta">
          <CardMedia
            component="img"
            height="250"
            // image={atenas}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png"
            alt="green iguana"
          />
          <h3>Bulbasaur</h3>
        </div>
        <div class="planta">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png"
            alt="green iguana"
          />
          <h3>Ivysaur</h3>
        </div>
        <div class="planta">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/003.png"
            alt="green iguana"
          />
          <h3>Venusaur</h3>
        </div>
        <div class="fuego">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/004.png"
            alt="green iguana"
          />
          <h3>Charmander</h3>
        </div>
        <div class="fuego">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/005.png"
            alt="green iguana"
          />
          <h3>Charmeleon</h3>
        </div>
        <div class="fuego">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/006.png"
            alt="green iguana"
          />
          <h3>Charizard</h3>
        </div>
        <div class="agua">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/007.png"
            alt="green iguana"
          />
          <h3>Squirtle</h3>
        </div>
        <div class="agua">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/008.png"
            alt="green iguana"
          />
          <h3>Wartortle</h3>
        </div>
        <div class="agua">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/009.png"
            alt="green iguana"
          />
          <h3>Blastoise</h3>
        </div>
        <div class="veneno">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/109.png"
            alt="green iguana"
          />
          <h3>Koffing</h3>
        </div>
        <div class="veneno">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/088.png"
            alt="green iguana"
          />
          <h3>Grimer</h3>
        </div>
        <div class="veneno">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/089.png"
            alt="green iguana"
          />
          <h3>Muk</h3>
        </div>
        <div class="electricidad">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/025.png"
            alt="green iguana"
          />
          <h3>Pikachu</h3>
        </div>
        <div class="electricidad">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/026.png"
            alt="green iguana"
          />
          <h3>Raichu</h3>
        </div>
        <div class="electricidad">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/145.png"
            alt="green iguana"
          />
          <h3>Zapdos</h3>
        </div>
        <div class="normal">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/056.png"
            alt="green iguana"
          />
          <h3>Mankey</h3>
        </div>
        <div class="normal">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/057.png"
            alt="green iguana"
          />
          <h3>Primeape</h3>
        </div>
        <div class="normal">
          <CardMedia
            component="img"
            height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/067.png"
            alt="green iguana"
          />
          <h3>Machoke</h3>
        </div>
      </article>
    </body>
  );
}

export default Techstack;
