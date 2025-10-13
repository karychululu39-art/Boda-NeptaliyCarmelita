import React from "react";
import "./Recepcion.css";
import recepcionImg from "../assets/recepcion.jpg"; // Aquí va tu imagen del salón
import otroSalonImg from "../assets/bonito.jpg"; // Aquí va tu imagen del salón

const Recepcion = () => {
  return (
    <section className="recepcion">
       <h2 className="titulo-seccion">¡Itinerario!</h2>
            <p className="subtexto-seccion">
              Tu presencia es muy importante en cada momento,agradecemos tu puntualidad.
            </p>
            <br />
      <div className="contenedor">
        <div className="fila imagen-izquierda">
          <div className="texto">
            <h2 className="titulo animate_animated animate_fadeInUp">¡Acompañanos! </h2>
            <br />
            <p className="detalle"><strong>Lugar:</strong> Parroquía San José las Palmas</p>
            <br />
            <p className="detalle"><strong>Hora:</strong> 17:45 hrs</p>
            <br />
            <p className="detalle"><strong>Domicilio:</strong> Av. Pantitlán 81, Las Palmas, 57440 Ciudad Nezahualcóyotl, Edo. De Mex.</p>
            <a
              href="https://maps.app.goo.gl/hAkQeQXffFFTa6g16?g_st=ipc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              IR AL LUGAR
            </a>
          </div>

          <div className="imagen">
            <img src={otroSalonImg} alt="Salón Jardín Encanto" />
          </div>
        </div>

        
        {/* Columna izquierda */}
        <div className="texto">
          <h2 className="titulo animate__animated animate__fadeInUp">Recepción</h2>
          <br />
          <p className= "detalle"><strong>Lugar:</strong> Salón, Villa Arizona Plus”</p>
          <br />
          <p className= "detalle"><strong>Hora:</strong> 20:30 hrs</p>
          <br />
          <p className="detalle"><strong>Domicilio:</strong> Av. Nezahualcóyotl no. 630 Col. Tamaulipas CD. Nezahualcóyotl</p>
          <a
            href="https://maps.app.goo.gl/fKncwz8ZPZNzDr7b8?g_st=ipc" // puedes cambiar el link
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            IR AL LUGAR
          </a>
        </div>
        <div className="imagen">
          <img src={recepcionImg} alt="Salón Cibeles" />
        </div>


      </div>
    </section>
  );
};

export default Recepcion;