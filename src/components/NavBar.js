import React from 'react';
import './NavBar.css';
import logo from '../assets/logo.png'; 
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Navbar = () => {
  const handleButtonClick = (buttonText) => {
    console.log(`Botón presionado: ${buttonText}`);
  };

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo" /> 
        </Link>
        <Link to="/tareas" className="button-text" onClick={() => handleButtonClick("Tareas")}>
          Tareas
        </Link>
        <Link to="/cursos" className="button-text" onClick={() => handleButtonClick("Cursos")}>
          Cursos
        </Link>
        <Link to="/maestros" className="button-text" onClick={() => handleButtonClick("Maestros")}>
          Maestros
        </Link>
        <Link to="/documentos" className="button-text" onClick={() => handleButtonClick("Documentos")}>
          Documentos
        </Link>
        {/* Agrega más elementos de texto según sea necesario */}
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Navbar;
