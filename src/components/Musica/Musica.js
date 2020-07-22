import React from "react";
import "./Musica.css";
import Video from "./Video/Video";

export default function Musica() {
  return (
    <div className="Musica" id="musica">
      <div className="container">
        <h2 className="Musica-heading">Musica</h2>
        <div className="Musica-wrapper">
          <Video videoId="qKwPsEEn-r0" title="title"/>
          <Video videoId="qKwPsEEn-r0" title="title"/>
          <Video videoId="qKwPsEEn-r0" title="title"/>
          <Video videoId="qKwPsEEn-r0" title="title"/>
          <Video videoId="qKwPsEEn-r0" title="title"/>
        </div>
      </div>
    </div>
  );
}
