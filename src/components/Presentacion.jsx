import React from "react";
import "./Presentacion.css";
import parejaImg from "../assets/Diseño.png"; // 🔹 Usa tu imagen redonda aquí
import { FaCalendarAlt } from "react-icons/fa";

const Presentacion = () => {
  return (
    <section className="presentacion">
      <div className="presentacion-contenido">
        <img src={parejaImg} 
        alt="Pareja" 
        className="presentacion-foto" />
  <h2 className="presentacion-nombres">
    Carmelita <br /> & <br /> Neptali
  </h2>
  <p className="texto-biblico">
    'El agua de todos los mares no podría apagar el amor; tampoco los ríos podrían extinguirlo. Si alguien ofreciera todas sus riquezas a cambio del amor, burlas tan solo recibiría.'
    <span>(El cantar de los cantares 8:7)</span>
  </p>

  <a
  href="https://www.google.com/calendar/render?action=TEMPLATE&text=Boda+de+Neptali+y+Carmelita&details=¡Acompáñanos+a+celebrar+este+gran+día!&location=Salón+El+Encanto,+CDMX&dates=20251215T220000Z/20251216T040000Z"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-calendario"
>
  <FaCalendarAlt style= {{marginRight: "8px" }} />Agregar al calendario
</a>
      </div>
    </section>
  );
};

export default Presentacion;
