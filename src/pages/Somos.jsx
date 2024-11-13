import React from "react";
import "./Podcast.css";
import imgLinkedinYr from "../assets/img/yanel_ricarte.jfif";
import imgLinkedinBa from "../assets/img/brenda_alvarez.jfif";

const Somos = () => {
  return (
    <section className="content">
      <h3>¿Quiénes somos?</h3>
      <p>
        Somos un equipo dedicado a la educación y el desarrollo de soluciones tecnológicas. Nuestra misión es acercar el conocimiento y fomentar el uso de herramientas digitales en el ámbito educativo. Te invitamos a conocernos mejor y a unirte a nuestras iniciativas.
        <br />
        <a
          href="https://edunologysofla.milaulas.com/login/index.php"
          target="_blank"
          rel="noopener noreferrer"
          className="course-link"
        >
          Podés conocer nuestro curso en Moodle aquí.
        </a>
      </p>

      <div className="creators-section">
        <h3>Nuestro equipo</h3>
        <div className="creators-info">
          {/* Creadora 1 */}
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
                  Desarrolladora de software
                  <span className="sub-details">
                    Docente Especialista en TIC
                  </span>
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

export default Somos;
