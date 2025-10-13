import React, { useState } from "react";
import "./Agradecimiento.css";

// Importa tus imágenes
import img1 from "../assets/gracias1.jpeg";
import img2 from "../assets/gracias2.jpg";
import img3 from "../assets/gracias3.jpg";
import img4 from "../assets/gracias4.jpeg";
import img5 from "../assets/gracias5.jpeg";
import img6 from "../assets/gracias6.jpeg";

const Agradecimiento = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const images = [img1, img2, img3, img4, img5, img6];

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const closeLightbox = () => setSelectedIndex(null);

  return (
    <section className="agradecimiento">
      {/* Texto de agradecimiento */}
      <div className="agradecimiento-texto">
        <h2>Gracias por acompañarnos</h2>
        <p>
          Su amor, apoyo y presencia hacen de este día un momento inolvidable.  
          Con todo nuestro cariño, agradecemos por formar parte de esta historia. 💛
        </p>
      </div>

      {/* Contenedor elegante del collage */}
      <div className="collage-contenedor">
        <div className="collage">
          {images.map((img, index) => (
            <div
              key={index}
              className="imagen-collage"
              onClick={() => setSelectedIndex(index)}
            >
              <img src={img} alt={`Gracias ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

     {selectedIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="cerrar" onClick={closeLightbox}>
              ✕
            </button>
            <button className="nav prev" onClick={handlePrev}>
              ‹
            </button>
            <img src={images[selectedIndex]} alt="Ampliada" />
            <button className="nav next" onClick={handleNext}>
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Agradecimiento;

