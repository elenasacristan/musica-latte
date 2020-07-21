import React from "react";
import "./Info.css";
import Item from "./Item/Item";

export default function Info() {
  return (
    <div className="Info" id="info">
      <div className="Info-block Info-block-pink">
        <h2 className="Info-heading">Lo que queremos</h2>
        <div className="Info-wrapper container">
          <div className="row">
            <Item
              icon="GiCutDiamond"
              title="Propósito"
              p1="Generar bienestar y mejorar la calidad de vida de las personas."
              p2="Favorecer la integración social."
              p3="Potenciar el desarrollo personal."
            />
            <Item
              icon="GiBullseye"
              title="Misión"
              p1="Acercar la musica a todos y todas a través de conciertos, talleres, formación y otras actividades."
            />
            <Item
              icon="FaEye"
              title="Visión"
              p1="Concienciar del poder que tiene la música en la salud."
              p2="Dotar de música al entorno laboral y personal."
              p3="Poner el foco en las personas en riesgo de exclusión social."
            />
          </div>
        </div>
      </div>
      <div className="Info-block Info-block-blue">
        <h2 className="Info-heading">Lo que queremos</h2>
        <div className="Info-wrapper container">
          <div className="row">
            <Item
              icon="GiCutDiamond"
              title="Propósito"
              p1="Generar bienestar y mejorar la calidad de vida de las personas."
              p2="Favorecer la integración social."
              p3="Potenciar el desarrollo personal."
            />
            <Item
              icon="GiBullseye"
              title="Misión"
              p1="Acercar la musica a todos y todas a través de conciertos, talleres, formación y otras actividades."
            />
            <Item
              icon="FaEye"
              title="Visión"
              p1="Concienciar del poder que tiene la música en la salud."
              p2="Dotar de música al entorno laboral y personal."
              p3="Poner el foco en las personas en riesgo de exclusión social."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
