import React from 'react';
import './Home.css';
import BlueBar from '../components/BlueBar';

const Home = ({correoUsuario}) => {
  return (
    <div>
      <BlueBar />
      <h1>Bienvenido {correoUsuario}</h1> <br></br>
      <div className="container">
      
        <div className="column">
          
          <h2>Cursos</h2>
          <p>Navega a través de varios cursos académicos que se adapten a tus necesidades de aprendizaje</p>
          <br /><br />
          <h2>Tareas</h2>
          <p>Sube tus tareas y proyectos de manera sencilla y recibe retroalimentación de tus profesores</p>
        </div>

        <div className="column">
          <h2>Evaluación</h2>
          <p>Los profesores pueden calificar tus tareas y exámenes, proporcionando un seguimiento a tu desempeño.</p>
          <br /><br />
          <h2>Maestros</h2>
          <p>Mantén una comunicación fluida con tus profesores y compañeros de clase</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
