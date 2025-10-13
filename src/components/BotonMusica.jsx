import React, { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react"; // íconos bonitos opcionales
import musica from "../assets/Perfect.mp3";
import "./BotonMusica.css";

const BotonMusica = () => {
  const [reproduciendo, setReproduciendo] = useState(false);
  const audioRef = useRef(new Audio(musica));

  const toggleMusica = () => {
    const audio = audioRef.current;
    if (reproduciendo) {
      audio.pause();
    } else {
      audio.play();
      audio.loop = true; // para que siga sonando
    }
    setReproduciendo(!reproduciendo);
  };

  return (
    <button className="boton-musica" onClick={toggleMusica}>
      {reproduciendo ? <Volume2 size={22} /> : <VolumeX size={22} />}
    </button>
  );
};

export default BotonMusica;