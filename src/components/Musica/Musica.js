import React, {useState, useEffect} from "react";
import "./Musica.css";
import Video from "./Video/Video";

export default function Musica() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/videos/")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        console.log(data)
      });
  }, []);


  return (
    <div className="Musica" id="musica">
        <h2 className="Musica-heading">Musica</h2>
        <div className="Musica-wrapper">
        {
          videos.map((video,index) => <Video key={index} videoId={video.videoId} title={video.title}/>)
        }
        </div>
    </div>
  );
}
