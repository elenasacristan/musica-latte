import React, { useState, useEffect } from "react";
import "./Gallery.css";
import Masonry from "react-masonry-css";

export default function Gallery() {
  const [fotos, setFotos] = useState([]);

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

  return (
    <div className="Gallery" id="fotos">
        <h2 className="Gallery-heading">Fotos</h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {fotos.map((foto, index) => (
            <img key={index} src={foto.foto} alt={foto.title} />
          ))}
        </Masonry>
    </div>
  );
}
