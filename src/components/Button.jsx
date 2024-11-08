// src/components/Button.jsx
import React from 'react';
import './Button.css';  // Asegúrate de crear el archivo CSS correspondiente

const Button = ({ children, onClick, className }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
