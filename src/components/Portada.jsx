import React, { useState, useEffect }from "react";
import portadaImg from "../assets/Carmelita.jpeg";
import Contador from "./Contador";
import "./Portada.css";


const Portada = () => {
  const [opacity, setOpacity] = useState(1);
   const [mostrarModal, setMostrarModal] = useState(true); // 👈 Modal visible al principio

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 400, 0); 
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cerrarModal = () => {
    setMostrarModal(false);
  };


  return (
    <div
      className="portada"
      style={{ backgroundImage: `url(${portadaImg})` }}
    >
      <div className="portada-overlay" />
      <div className="portada-contenido" style={{ opacity }}>
        <h3 className="portada-fecha">28 / Noviembre / 2025</h3>
        <br /> <br />
        <h1 className="portada-titulo">¡Nuestra Boda!</h1>
        <Contador fechaObjetivo="2025-11-28T00:00:00" />
      </div>
    </div>
  );
};
export default Portada;