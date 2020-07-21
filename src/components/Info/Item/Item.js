import React, { useState } from "react";
import { GiCutDiamond, GiBullseye, GiMicrophone } from "react-icons/gi";
import { FaEye, FaMusic, FaHandHoldingHeart } from "react-icons/fa";


export default function Item({ icon, title, p1, p2, p3 }) {
  let icono;

  if (icon === "GiCutDiamond") {
    icono = <GiCutDiamond className="Info-icono" />;
  } else if (icon === "GiBullseye") {
    icono = <GiBullseye className="Info-icono" />;
  } else if (icon === "FaEye") {
    icono = <FaEye className="Info-icono" />;
  }

  return (
    <div className="Info-item col-md-4">
      {icono}
      <h3 className="Info-item-heading">{title}</h3>
      <ul>
        <li>{p1}</li>
        {p2 ? <li>{p2}</li> : ""}
        {p2 ? <li>{p3}</li> : ""}
      </ul>
    </div>
  );
}
