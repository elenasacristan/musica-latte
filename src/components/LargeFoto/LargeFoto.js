import React from "react";
import "./LargeFoto.css";

export default function LargeFoto({ src, title }) {
  return <img className="LargeFoto-img" src={src} alt={title} />;
}
