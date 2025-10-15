import React from "react";
import "./EventoInfo.css";
import dress from "../assets/dress.jpg";
import asistencia from "../assets/asistencia.jpg";

const EventoInfo = () => {
  return (
    <section className="evento-info">
      {/* 💫 PORTADA (la parte superior con la imagen y los textos) */}
      <div className="evento-info__portada">
        <div className="evento-info__overlay">
          <h2 className="evento-info__title">Para el evento</h2>
          <p className="evento-info__subtitle">
            Te agradecemos atender las siguientes indicaciones.
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>

      {/* 💌 TARJETAS (parte inferior con fondo claro en móvil) */}
      <div className="evento-info__cards">
        {/* Código de vestimenta */}
        <div className="evento-card">
          <div className="evento-card__icon">
            <img src={dress} alt="Código de vestimenta" />
          </div>
          {/*segunda sección */}
          <h3 className="evento-card__title">Código de vestimenta</h3>
          <p className="evento-card__text">
            Hombre traje (uso opcional de corbata o moño) y zapato formal. <br />
            Mujer vestido.
          </p>
        </div>

        {/* Asistencia */}
        <div className="evento-card">
          <div className="evento-card__icon">
            <img src={asistencia} alt="Asistencia" />
          </div>
          <h3 className="evento-card__title">Asistencia</h3>
          <p className="evento-card__text">
            Confirmación necesaria a la brevedad posible, lo apreciaremos mucho.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScOWB4_Z1SP8c010PzlrXB2-QL8AOYnYLtA4T2LJOBOoWA7cg/viewform?usp=dialog" target="_blank" 
            rel="noopener noreferrer" className="btn" > 
            Confirmar asistencia 
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventoInfo;

