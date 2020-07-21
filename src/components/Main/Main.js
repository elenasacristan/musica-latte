import React from "react";
import Home from "../Home/Home";
import Info from "../Info/Info";
import Musica from "../Musica/Musica";
import Contacto from "../Contacto/Contacto";
import NavBar from "../NavBar/NavBar";

export default function Main() {
  return (
    <div id="home">
      <NavBar />

      <Home />
      <Info id="info" />
      <Musica id="musica" />
      <Contacto id="contacto" />
    </div>
  );
}
