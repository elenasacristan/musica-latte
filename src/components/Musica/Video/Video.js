import React from "react";
import "./Video.css";

export default function Video({ videoId, title}) {
  return (
    <div className="Musica-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?&color=white&rel=0&mute=0`}
        title={title}
        allowFullScreen={true}
        frameBorder="0"
      ></iframe>
    </div>
  );
}
