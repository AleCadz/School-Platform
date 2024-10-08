import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const Task = ({ entrega, deleteEntrega }) => {
  const { id, Alumno, Curso, Titulo, Descripcion, FechaEntrega } = entrega;

  const confirmDelete = () => {
    MySwal.fire({
      title: '¿Estás seguro?',
      text: 'No puedes deshacer esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEntrega(id);
        MySwal.fire({
          title: '¡Eliminado!',
          text: 'Tu archivo ha sido borrado',
          icon: 'success',
        });
      }
    });
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{Titulo}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{Curso}</h6>
        <h6 className="card-subtitle mb-2 text-muted">{FechaEntrega}</h6>
        <p className="card-text">{Alumno}</p>
        <p className="card-text">{Descripcion}</p>
        <button onClick={confirmDelete} className="btn btn-danger me-2">
          Borrar
        </button>
        <Link to={`/editAlumno/${id}`} className="btn btn-primary">
          Editar
        </Link>
      </div>
    </div>
  );
};

const ShowAlumno = ({correoUsuario}) => {
  
  const [entregas, setEntregas] = useState([]);
  const entregasCollection = collection(db, 'entregas');

  const location = useLocation();
  const pathname = location.pathname; // Obtiene la ruta actual
  const cursoElegidoEncoded = pathname.split('/').pop(); // Obtiene la última parte de la ruta

  // Decodificar los espacios (%20) a espacios normales
  const cursoElegido = decodeURIComponent(cursoElegidoEncoded);

  const getEntregas = async () => {
    const data = await getDocs(entregasCollection);
    const filteredData = data.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }))
      .filter((entrega) => entrega.Curso === cursoElegido && entrega.Alumno === correoUsuario); // Filtrar por el campo Curso
    setEntregas(filteredData);
  };

  const deleteEntrega = async (id) => {
    const entregaDoc = doc(db, 'entregas', id);
    await deleteDoc(entregaDoc);
    getEntregas();
  };

  useEffect(() => {
    getEntregas();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Tareas de {cursoElegido}</h1>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {entregas.map((entrega) => (
              <div key={entrega.id} className="col">
                <Task entrega={entrega} deleteEntrega={deleteEntrega} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAlumno;