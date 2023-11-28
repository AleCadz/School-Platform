import React, { useEffect, useState } from 'react';
import './Cursos.css';
import imgWeb from '../assets/imgWeb.jpg'; // Import the image
import imgAutomatas from '../assets/imgAutomatas.png';
import { Link } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';

const cursosData = [
  {
    id: 1,
    title: 'Programacion Web',
    image: imgWeb, // Use the imported variable
    link: '/ProgWeb'
  },
  {
    id: 2,
    title: 'Automatas',
    image: imgAutomatas,
    link: '/Documentos'
  },
  // Add more data objects as needed
];

const Cursos = ({ correoUsuario }) => {
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const checkUserType = async () => {
      const usuariosCollection = collection(db, 'usuarios');
      const userQuery = query(
        usuariosCollection,
        where('Correo', '==', correoUsuario)
      );
      const querySnapshot = await getDocs(userQuery);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          setUserType(doc.data().Tipo);
        });
      }
    };

    checkUserType();
  }, [correoUsuario]);

  return (
    <div>
      <h1>Cursos</h1>
      <div className="cursos-grid">
        {cursosData.map((curso) => (
          <Link
            to={userType === 'Alumno' ? '/ProgWebAlumno' : curso.link}
            key={curso.id}
            className="curso-item"
          >
            <img src={curso.image} alt={curso.title} />
            <p>{curso.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cursos;
