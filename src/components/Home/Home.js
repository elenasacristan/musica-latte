import React from "react";
import "./Home.css";
import logo from "../../common/images/MLlogo.png";


export default function Home() {
  return (
    <div className="Home">
      <div className="Home-wrapper">
          <div className="Home-intro">
          <img src={logo} alt="logo"/>
              <p>Música para el bienestar, la integración <br/>social y el desarrollo personal.</p>
          </div>
      </div>
    </div>
  );
}
