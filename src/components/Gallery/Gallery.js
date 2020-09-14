import React, { useState, useEffect } from "react";
import "./Gallery.css";
import LargeFoto from "../LargeFoto/LargeFoto.js";
import Masonry from "react-masonry-css";

export default function Gallery() {
  const [fotos, setFotos] = useState([]);
  const [large, setLarge] = useState(false);
  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("/gallery/")
      .then((res) => res.json())
      .then((data) => {
        setFotos(data);
        console.log(fotos);
      });
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    700: 2,
    500: 1,
  };

  const enlarge = (src, title) => {
    setLarge(true);
    setSrc(src);
    setTitle(title);
  };
  const closeImage = () => {
    setLarge(false);
  };

  return (
    <div className="Gallery" id="fotos">
      <h2 className="Gallery-heading">Fotos</h2>

      {large ? (
        <div className="LargeFoto-container" onClick={closeImage}>
          <LargeFoto src={src} title={title} />
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {fotos.map((foto, index) => (
            <img
              onClick={() => enlarge(foto.foto, foto.title)}
              key={index}
              src={foto.foto}
              alt={foto.title}
            />
          ))}
        </Masonry>
      )}
    </div>
  );
}
