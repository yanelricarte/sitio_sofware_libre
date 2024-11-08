import React from 'react';
import './Podcast.css';  // Asegúrate de agregar los estilos necesarios

const Podcast = () => {
  return (
    <section className="content">
      <h3>Podcast</h3>
      <p>Escucha los episodios de nuestro podcast sobre la temática de comunicación digital.</p>

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
          <p>En este episodio, profundizamos en temas clave sobre comunicación digital.</p>
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
          <p>No te pierdas nuestro tercer episodio, ¡lleno de contenido valioso!</p>
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
    </section>
  );
};

export default Podcast;
