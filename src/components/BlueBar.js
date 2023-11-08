import React from 'react';
import './BlueBar.css'; 
import logo from '../assets/logo.png';

const BlueBar = ({ text }) => {
  return (
    <div className="blue-bar">
      <img src={logo} alt="logo" className="image" /> {}
      <p>Tec Academy es una plataforma desarrollada para el Tec Mante para la gestion de cursos, tareas y examenes. Diseñada especificamente para satisfacer las necesidades de tanto alumnos como profesores, esta plataforma facilita el acceso a cursos, la entrega de tareas y la evaluacion de los resultados de manera eficiente y efectiva.</p>
    </div>
  );
};

export default BlueBar;
