import { React } from "react";
import negrito from "../../Assets/negrito.jpeg";
import polonia from "../../Assets/poloniaFinal.png";
import cali from "../../Assets/Screenshot from 2023-09-15 10-07-06.png";
import pipe from "../../Assets/Screenshot from 2023-09-15 10-11-59.png";
import nalita from "../../Assets/nalitaFinal.png";
import atenasUltima from "../../Assets/atenas-ultima.png";
import lalitoFinal from "../../Assets/lalitoFinal.jpeg";
import iorio from "../../Assets/Screenshot from 2023-09-15 14-06-35.png";
import simon from "../../Assets/Screenshot from 2023-09-15 14-06-11.png";
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
      <Card image={simon} title="Simon" />
      <Card image={iorio} title="Iorio" />
    </article>
  );
}

export default TuComponente;
