import { React, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import styles from "./aboutStyle.css";

function Card({ image, title }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyles = {
    borderRadius: "15%",
    transform: isHovered ? "rotate(360deg)" : "none",
    transition: "transform 0.3s ease-in-out",
    margin: "15px",
  };

  return (
    <div
      style={cardStyles}
      className="violet-purple"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardMedia
        component="img"
        class="cardSize"
        image={image}
        alt="green iguana"
      />
      <h5>{title}</h5>
    </div>
  );
}

export default Card;
