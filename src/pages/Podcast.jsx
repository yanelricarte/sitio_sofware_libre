import React from "react";
import "./Podcast.css"; //
import imgLinkedinYr from "../assets/img/yanel_ricarte.jfif";
import imgLinkedinBa from "../assets/img/brenda_alvarez.jfif";

const Podcast = () => {
  return (
    <section className="content">
      <h3>Podcast</h3>
      <p>
        Escucha los episodios de nuestro podcast sobre el método SOFLA en el dictado de clases online.      </p>

      <div className="podcast-cards-container">
        {/* Episodio 1 */}
        <div className="podcast-card">
          <h4>Episodio 1</h4>
          <p>Explora el primer episodio de nuestro podcast.</p>
          <a
            href="https://on.soundcloud.com/ivSJVyijXVvdXjo87"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Escuchar en SoundCloud
          </a>
        </div>

        {/* Episodio 2 */}
        <div className="podcast-card">
          <h4>Episodio 2</h4>
          <p>
          En este episodio, exploramos en temas clave relacionados con el método SOFLA en la enseñanza de clases online </p>
          <a
            href="https://on.soundcloud.com/kZjhdERJ1UjmEByR8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Escuchar en SoundCloud
          </a>
        </div>

        {/* Episodio 3 */}
        <div className="podcast-card">
          <h4>Episodio 3</h4>
          <p>
            No te pierdas nuestro tercer episodio, ¡lleno de contenido valioso!
          </p>
          <a
            href="https://on.soundcloud.com/dEs21zFFC2fhcVvY9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Escuchar en SoundCloud
          </a>
        </div>
      </div>

      <div className="creators-section">
        <h3>Las creadoras de este podcast:</h3>
        <div className="creators-info">
          {/* Creadora 1 */}{" "}
          <div className="creator">
            <div className="creator-header">
              <img
                src={imgLinkedinBa}
                alt="Brenda Patricia Alvarez"
                className="creator-image"
              />
              <div className="creator-details">
                <p>
                  <strong>Brenda Patricia Alvarez</strong>
                </p>
                <p>
                  Profesora de Lengua Inglesa
                  <span className="sub-details">Coordinadora académica</span>
                </p>

                <a
                  href="https://www.linkedin.com/in/brenda-patricia-alvarez-westtesten-4b65342b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="creator-link"
                >
                  <i className="fab fa-linkedin"></i> Ver perfil de LinkedIn
                </a>
              </div>
            </div>
          </div>
          {/* Creadora 2 */}
          <div className="creator">
            <div className="creator-header">
              <img
                src={imgLinkedinYr}
                alt="Yanel Ricarte"
                className="creator-image"
              />
              <div className="creator-details">
                <p>
                  <strong>Yanel Ricarte</strong>
                </p>
                <p>
                  {" "}
                  Desarrolladora de software
                  <span className="sub-details">
                    Docente Especialista en TIC
                  </span>{" "}
                </p>
                <a
                  href="https://www.linkedin.com/in/yanelricarte/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="creator-link"
                >
                  <i className="fab fa-linkedin"></i> Ver perfil de LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
