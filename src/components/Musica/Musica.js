import React from "react";
import "./Musica.css";

export default function Musica() {
  return (
    <div className="Musica" id="musica">
      <div className="container">
        <h2 className="Musica-heading">Musica</h2>
        <div className="Musica-wrapper">
          <div className="Musica-video">
            <iframe
              src="http://www.youtube.com/embed/qKwPsEEn-r0?autoplay=1&showinfo=0"
            title="video1" allowfullscreen="true"></iframe>
          </div>
          <div className="Musica-video">
            <iframe
              src="http://www.youtube.com/embed/qKwPsEEn-r0?autoplay=1&showinfo=0" title="video2" allowfullscreen="true"
            ></iframe>
          </div>
          <div className="Musica-video">
            <iframe
              src="http://www.youtube.com/embed/qKwPsEEn-r0?autoplay=1&showinfo=0" title="video3" allowfullscreen="true"
            ></iframe>
          </div>
          <div className="Musica-video">
            <iframe
              
              src="http://www.youtube.com/embed/qKwPsEEn-r0?autoplay=1&showinfo=0" title="video4" allowfullscreen="true"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
