import React from "react";
import Portada from "./components/Portada";
import Info from "./components/Info";
import Presentacion from "./components/Presentacion";
import Recepcion from "./components/Recepcion";
import MesaRegalos from "./components/MesaRegalos";
import BotonMusica from "./components/BotonMusica";
import Agradecimiento from "./components/Agradecimiento";

export default function App() {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <Portada />
      <Presentacion />
      <Info />
      <Recepcion />
      <MesaRegalos />
      <BotonMusica />
      <Agradecimiento />
    </div>
  );
}