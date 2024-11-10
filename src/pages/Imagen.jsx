import React from 'react';
import './Imagen.css'; 
import aulaInvImage from '../assets/img/aula_inv.png'; 

const Imagen = () => {
  return (
    <section className="content">
      <h2>Imagen - Clase Online Invertida</h2>
      
      <div className="image-container">
        <img 
          src={aulaInvImage} 
          alt="Imagen de clase invertida"
          className="imagen-clase-invertida" 
        />
      </div>
      
      <p>Esta imagen fue generada en Ideogram para ilustrar el concepto de clase online invertida, utilizado en nuestro proyecto.</p>
    </section>
  );
};

export default Imagen;
