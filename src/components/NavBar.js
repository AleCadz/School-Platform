import React from 'react';
import './NavBar.css';

import { appFireBase, db } from '../firebaseConfig/firebase';
import {getAuth, signOut} from 'firebase/auth'
import logo from '../assets/logo.png'; 
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const auth = getAuth(appFireBase)

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
        <h2><button className='btn btn-primary' onClick={()=>signOut(auth)}>Cerrar sesion</button></h2>
      </nav>
      <hr />
      <Outlet />
      
    </div>
  );
};

export default Navbar;
