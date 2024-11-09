import React from "react";
import imgHome from "../assets/img/woman.jpeg";

const Home = () => {
  return (
    <>
      <section className="section-home">
        <div className="content">
          <h3>Bienvenidos </h3>
          <p>
            Este sitio web ha sido creado como parte del Trabajo Integrador
            Final II, en el cual se integran diversos recursos relacionados con
            el método SOFLA y el aula invertida en la enseñanza de idiomas en
            entornos virtuales. Navega por las diferentes secciones para
            descubrir cada uno de los recursos disponibles.
          </p>
        </div>
      {" "}
      <div className="home-img">
        <img src={imgHome} alt="Imagen Home" />
      </div></section>
    </>
  );
};

export default Home;
