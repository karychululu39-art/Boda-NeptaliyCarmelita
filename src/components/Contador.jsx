import React, { useEffect, useState } from "react";
import "./Contador.css";

const Contador = ({ fechaObjetivo }) => {
  const calcularTiempo = () => {
    const diferencia = +new Date(fechaObjetivo) - +new Date();
    let tiempo = {};
    if (diferencia > 0) {
      tiempo = {
        días: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
        horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((diferencia / 1000 / 60) % 60),
        segundos: Math.floor((diferencia / 1000) % 60),
      };
    } else {
      tiempo = { días: 0, horas: 0, minutos: 0, segundos: 0 };
    }
    return tiempo;
  };

  const [tiempoRestante, setTiempoRestante] = useState(calcularTiempo());

  useEffect(() => {
    const timer = setInterval(() => {
      setTiempoRestante(calcularTiempo());
    }, 1000);
    return () => clearInterval(timer);
  }, [fechaObjetivo]);

  return (
     <div className="contador">
      {Object.entries(tiempoRestante).map(([label, valor]) => (
        <div key={label} className="bloque">
          <span className="numero">{String(valor).padStart(2, "0")}</span>
          <span className="texto">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Contador;