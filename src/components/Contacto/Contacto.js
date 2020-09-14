import React from "react";
import "./Contacto.css";
import mail from "../../common/images/mail.png";
import youtube from "../../common/images/youtube.png";
import phone from "../../common/images/phone.png";
import facebook from "../../common/images/facebook.png";

export default function Contacto() {
  return (
    <div className="Contacto" id="contacto">
      <div className="container">
        <h3 className="Contacto-heading">Contacto</h3>
        <h3 className="Contacto-subheading-heading text-center">
          ¡Contacta con nosotros y te haremos un plan a tu medida!
        </h3>
        
        <div className="Contacto-wrapper">
          <div className="Contact-item">
            <a
              href="https://www.youtube.com/results?search_query=%23M%C3%BAsicaLatte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="youtube link" />
            </a>
          </div>
          <div className="Contact-item">
            <a
              href="mailto:musicalatte.paratodos@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mail} alt="mail link" />
            </a>
          </div>
          <div className="Contact-item">
            <a
              href="https://www.facebook.com/musicalatte.paratodos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook link" />
            </a>
          </div>
        </div>
        <h4 className="Contact-phone text-center">Tel: +34 676 92 42 85</h4>
      </div>
    </div>
  );
}
