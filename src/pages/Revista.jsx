import React from 'react';
import './Revista.css';
import revImage from '../assets/img/revista.png'; 

const Revista = () => {
  return (
    <section className="content">
      <h3>Revista Digital</h3>
      <p>Explora la revista digital que hemos diseñado como parte de nuestro trabajo integrador. Contiene información detallada y recursos visuales relacionados con nuestra temática.</p>
      
      <div className="revista-preview">
        {/* Usamos la variable revImage importada */}
        <a 
          href="https://www.canva.com/design/DAGOscaeOTo/CtW80-FbfEABM4l3nL5MPg/edit?utm_content=DAGOscaeOTo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={revImage} // Usamos la imagen importada aquí
            alt="Vista previa de la revista" 
            className="revista-thumbnail"
          />
        </a>
      </div>
      <div>
        
      </div>
      <div class="btn">
      <a 
        href="https://www.canva.com/design/DAGOscaeOTo/CtW80-FbfEABM4l3nL5MPg/edit?utm_content=DAGOscaeOTo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" 
        target="_blank" 
        rel="noopener noreferrer">
        ver revista completa
      </a></div>
    </section>
  );
};

export default Revista;
