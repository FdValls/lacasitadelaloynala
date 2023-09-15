import { React } from "react";
import negrito from "../../Assets/negrito.jpeg";
import polonia from "../../Assets/poloniaFinal.png";
import cali from "../../Assets/Screenshot from 2023-09-15 10-07-06.png";
import pipe from "../../Assets/Screenshot from 2023-09-15 10-11-59.png";
import nalita from "../../Assets/nalitaFinal.png";
import atenasUltima from "../../Assets/atenas-ultima.png";
import lalitoFinal from "../../Assets/lalitoFinal.jpeg";
import Card from "../About/Card";

function TuComponente() {
  return (
    <article className="contenedor">
      <Card image={atenasUltima} title="Atenas" />
      <Card image={lalitoFinal} title="Puppy" />
      <Card image={negrito} title="Negrito" />
      <Card image={nalita} title="Nali" />
      <Card image={pipe} title="Pipe" />
      <Card image={cali} title="Cali" />
      <Card image={polonia} title="Polonia" />
    </article>
  );
}

export default TuComponente;
