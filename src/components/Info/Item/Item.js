import React from "react";
import { GiCutDiamond, GiBullseye, GiMicrophone } from "react-icons/gi";
import { FaEye, FaMusic, FaHandHoldingHeart } from "react-icons/fa";

export default function Item({ icon, title, text }) {
  let icono;

  if (icon === "GiCutDiamond") {
    icono = <GiCutDiamond className="Info-icono" />;
  } else if (icon === "GiBullseye") {
    icono = <GiBullseye className="Info-icono" />;
  } else if (icon === "FaEye") {
    icono = <FaEye className="Info-icono" />;
  } else if (icon === "GiMicrophone") {
    icono = <GiMicrophone className="Info-icono" />;
  } else if (icon === "FaMusic") {
    icono = <FaMusic className="Info-icono" />;
  }else if (icon === "FaHandHoldingHeart") {
    icono = <FaHandHoldingHeart className="Info-icono" />;
  }

  return (
    <div className="Info-item col-md-4">
      {icono}
      <h3 className="Info-item-heading">{title}</h3>
      <ul>
        {text.split('. ').map((sentence, index) => (
          <li key={index}>{sentence}</li>
        ))}
      </ul>
    </div>
  );
}
