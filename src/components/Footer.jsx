// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Trabajo realizado por el Equipo 11 para la materia de Gestión de Recursos
        Digitales con Software Libre.
      </p>
      <div className="social-links">
        <p>Contactate con nosotras:</p>
        <a
          href="https://www.linkedin.com/in/brenda-patricia-alvarez-westtesten-4b65342b7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brenda Patricia Alvarez
        </a>
        <a
          href="https://www.linkedin.com/in/yanelricarte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yanel Ricarte
        </a>
      </div>
      <p>Licenciatura en Tecnología Educativa.</p>
    </footer>
  );
};

export default Footer;
