import React from "react";
import "./Video.css";

export default function Video({ videoId, title}) {
  return (
    <div className="Musica-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?&color=white&rel=0`}
        title={title}
        allowfullscreen="true"
        frameborder="0"
      ></iframe>
    </div>
  );
}
