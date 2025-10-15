import React from "react";
import "./MesaRegalos.css"; // Importamos su hoja de estilos import amazonImg from "../assets/amazon.jpg"; 
import dineroImg from "../assets/buzon.jpg"; 
import amazonImg from "../assets/amazon.jpg"

const MesaRegalos = () => { 
return ( 
<section className="mesa-regalos"> 
{/* 💫 PORTADA (la parte superior con la imagen y los textos) */}
<div className="mesa-regalos__portada">
<div className="evento-info__overlay">
<h2 className="titulo1">Mesa de Regalos</h2> 
<p className="descripcion"> Tu presencia en la celebración es lo más importante, pero si es tu deseo hacer un detalle, se encuentran las siguientes opciones. </p> 

</div>
</div>

<div className="tarjetas"> 
{/* Tarjeta Amazon */} 
<div className="tarjeta"> 
<div className="circulo"> 
<img src={amazonImg} alt="Amazon" /> 
</div> 
{/*segunda sección */}
<h3 className="tarjeta__title">Amazon</h3> 
<p  className="tarjeta__text">Evento: Neptali y Carmen</p> 
<a href="https://www.amazon.com.mx/wedding/registry/162QTQHJF3LDK" target="_blank" 
rel="noopener noreferrer" className="btn" > 
Ir a la mesa 
</a> 
</div>


{/* Tarjeta Buzón */} 
<div className="tarjeta"> 
<div className="circulo"> 
<img src={dineroImg} alt="Buzón de dinero" /> 
</div>
<h3 className="tarjeta__title">Sears</h3> 
<p className="tarjeta__text">Otras opciones.</p> 
<a href="https://www.sears.com.mx/Mesa-de-Regalos/209802/te-invito-a-mi-boda-carmen-neptali" 
target="_blank" rel="noopener noreferrer" 
className="btn" > 
Ir a la mesa 
</a> 
</div> 
</div> 
</section>
 ); }; 

export default MesaRegalos;
