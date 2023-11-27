// Cursos.js
import React from 'react';
import './Cursos.css';
import imgWeb from '../assets/imgWeb.jpg'; // Importa la imagen
import imgAutomatas from '../assets/imgAutomatas.png';
import { Link } from 'react-router-dom';

const cursosData = [
  {
    id: 1,
    title: 'Programacion Web',
    image: imgWeb, // Usa la variable importada
    link: '/ProgWeb'
  },
  {
    id: 2,
    title: 'Automatas',
    image: imgAutomatas,
    link: '/Documentos'
  },
  // Agrega más objetos de datos según sea necesario
];

const Cursos = ({correoUsuario}) => {
  return (
    <div>
      <h1>Cursos</h1>
      <div className="cursos-grid">
        {cursosData.map(curso => (
          <Link to={curso.link} key={curso.id} className="curso-item">
            <img src={curso.image} alt={curso.title} />
            <p>{curso.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cursos;
