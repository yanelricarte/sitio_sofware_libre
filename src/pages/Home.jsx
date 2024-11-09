import React from "react";
import imgHome from "../assets/img/woman.jpeg";

const Home = () => {
  return (
    <>
      <section className="content">
        <div>
          <h3>Bienvenidos </h3>
          <p>
            Este sitio web ha sido creado como parte del Trabajo Integrador
            Final II, en el cual se integran diversos recursos de comunicación
            digital. Navega a través de las diferentes secciones para ver cada
            uno de los recursos.
          </p>
        </div>
        <div className="home-img">
          <img src={imgHome} alt="Imagen Home" />
        </div>
      </section>
    </>
  );
};

export default Home;
