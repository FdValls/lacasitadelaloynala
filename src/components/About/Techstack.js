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
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="planta">
          <CardMedia 
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={atenas}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png"
            alt="green iguana"
          />
          <h5>Bulbasaur</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="planta">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/001.png"
            alt="green iguana"
          />
          <h5>Ivysaur</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="planta">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/003.png"
            alt="green iguana"
          />
          <h5>Venusaur</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="fuego">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/004.png"
            alt="green iguana"
          />
          <h5>Charmander</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="fuego">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/005.png"
            alt="green iguana"
          />
          <h5>Charmeleon</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="fuego">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/006.png"
            alt="green iguana"
          />
          <h5>Charizard</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="agua">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/007.png"
            alt="green iguana"
          />
          <h5>Squirtle</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="agua">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/008.png"
            alt="green iguana"
          />
          <h5>Wartortle</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="agua">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/009.png"
            alt="green iguana"
          />
          <h5>Blastoise</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="veneno">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/109.png"
            alt="green iguana"
          />
          <h5>Koffing</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="veneno">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/088.png"
            alt="green iguana"
          />
          <h5>Grimer</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="veneno">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/089.png"
            alt="green iguana"
          />
          <h5>Muk</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="electricidad">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/025.png"
            alt="green iguana"
          />
          <h5>Pikachu</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="electricidad">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/026.png"
            alt="green iguana"
          />
          <h5>Raichu</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="electricidad">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/145.png"
            alt="green iguana"
          />
          <h5>Zapdos</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="normal">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/056.png"
            alt="green iguana"
          />
          <h5>Mankey</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="normal">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/057.png"
            alt="green iguana"
          />
          <h5>Primeape</h5>
        </div>
        <div style={{border: "7px solid violet", borderRadius: "100%"}} class="normal">
          <CardMedia
            component="img"
             style={{ width: "140px", height: "90px" }}
            // height="250"
            // image={https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/002.png"}
            image="https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/067.png"
            alt="green iguana"
          />
          <h5>Machoke</h5>
        </div>
      </article>
    </body>
  );
}

export default Techstack;
