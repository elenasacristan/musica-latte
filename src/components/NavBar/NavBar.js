import React, { useState, useEffect } from "react";
import "./NavBar.css";
import Logo from "../../common/images/MLlogo.svg";
import { FaAlignJustify } from "react-icons/fa";
import { NavHashLink as Link } from "react-router-hash-link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerColor, setHeaderColor] = useState("");
  const [menuColor, setMenuColor] = useState("");

  const listenScrollEvent = () => {
    window.pageYOffset > 380
      ? setHeaderColor("Nav-red")
      : setHeaderColor("Nav-transparent");
    window.pageYOffset > 380
      ? setMenuColor("menu-red")
      : setMenuColor("menu-transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    
  });

  return (
    <div className={`NavBar ${headerColor}`}>
      <div className="logo">
        <span>
          <Link smooth to="#home" activeClassName="selected">
            <img src={Logo} alt="logo" />
          </Link>
        </span>
      </div>
      <div className="NavBar-continer-button-menu">
        <button className="NavBar-button" onClick={() => setIsOpen(!isOpen)}>
          <FaAlignJustify className="hamburger" />
        </button>
        <div className={`NavBar-box ${menuColor} ${isOpen ? "is-open" : ""}`}>
          <Link smooth to="#home">
            <div className="NavBar-box-link" onClick={() => setIsOpen(false)}>
              Inicio
            </div>
          </Link>
          <span>|</span>
          <Link smooth to="#info">
            <div className="NavBar-box-link" onClick={() => setIsOpen(false)}>
              Info
            </div>
          </Link>
          <span>|</span>
          <Link smooth to="#musica">
            <div className="NavBar-box-link" onClick={() => setIsOpen(false)}>
              Musica
            </div>
          </Link>
          <span>|</span>
          <Link smooth to="#fotos">
            <div className="NavBar-box-link" onClick={() => setIsOpen(false)}>
              Fotos
            </div>
          </Link>
          <span>|</span>
          <Link smooth to="#contacto">
            <div className="NavBar-box-link" onClick={() => setIsOpen(false)}>
              Contacto
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
