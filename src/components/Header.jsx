import React from 'react';
import './Header.css';  
import logo from '../assets/img/logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/">  
          <img src={logo} className="logo" alt="Logo" /> 
        </a>
        <h2 className="subtitle">Gestión de Recursos Digitales con Software Libre</h2>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/imagen">Imagen</a></li>
          <li><a href="/revista">Revista Digital</a></li>
          <li><a href="/podcast">Podcast</a></li>
          <li><a href="/video">Video</a></li>
        </ul>
      </nav>


    </header>
  );
};

export default Header;
