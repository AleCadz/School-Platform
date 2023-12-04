import React, { useEffect, useState } from 'react';
import './Cursos.css';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';

const Cursos = ({ correoUsuario }) => {
  const [userType, setUserType] = useState('');
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cursosCollection = collection(db, 'cursos');
      const querySnapshot = await getDocs(cursosCollection);
      const cursosData = [];

      querySnapshot.forEach((doc) => {
        cursosData.push(doc.data());
      });

      setCursos(cursosData);
    };

    fetchData();
  }, []);

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
        {/* Botón para agregar nuevo curso */}
        {userType === 'Profesor' && (
          <Link to="/nuevo-curso" className="btn btn-primary mb-3">
            Agregar Nuevo Curso
          </Link>
        )}
        {userType === 'Profesor' && (
          <Link to="/create" className="btn btn-primary mb-3">
            Agregar tarea
          </Link>
        )}
        {/* Mapeo de los cursos existentes */}
        {cursos.map((curso, index) => (
          <Link
            to={userType === 'Alumno' ? curso.title : curso.title}
            key={index}
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