import React, { useState, useEffect } from "react";
import "./Info.css";
import Item from "./Item/Item";

export default function Info() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/items/")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="Info" id="info">
      <div className="Info-block Info-block-pink">
        <div className="Info-wrapper container">
          <h2 className="Info-heading">Lo que queremos</h2>
          <div className="row">
            {items
              .filter(({ category }) => category === "queremos")
              .map(({ icon, name, text }) => (
                <Item icon={icon} title={name} text={text} />
              ))}
          </div>
        </div>
      </div>
      <div className="Info-block Info-block-blue">
        <div className="Info-wrapper container">
          <h2 className="Info-heading">Lo que hacemos </h2>
          <div className="row">
            {items
              .filter(({ category }) => category === "hacemos")
              .map(({ icon, name, text }) => (
                <Item icon={icon} title={name} text={text} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
