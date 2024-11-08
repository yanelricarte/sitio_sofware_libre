import React from 'react';
import './Video.css';

const Video = () => {
  return (
    <section className="content">
      <h3>Videos</h3>
      <p>Disfruta de los videos relacionados con nuestro trabajo integrador. Aquí podrás ver una serie de recursos audiovisuales que complementan los temas tratados en la revista digital.</p>
      
      <div className="video-container">
        <h4>Método SOFLA</h4>
   
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0PUmUVfM3sw?si=EscCcB4XKwzDeFUX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

    </section>
  );
};

export default Video;
