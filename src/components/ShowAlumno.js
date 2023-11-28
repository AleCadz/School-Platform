import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const Task = ({ entrega, deleteEntrega }) => {
  const { id, Alumno, Curso, Tarea, Contenido } = entrega;

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
        <h5 className="card-title">{Alumno}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{Curso}</h6>
        <p className="card-text">{Tarea}</p>
        <p className="card-text">{Contenido}</p>
        <Link to={`/edit/${id}`} className="btn btn-primary me-2">
          Editar
        </Link>
        <button onClick={confirmDelete} className="btn btn-danger">
          Borrar
        </button>
      </div>
    </div>
  );
};

const ShowAlumno = () => {
  const [entregas, setEntregas] = useState([]);

  const entregasCollection = collection(db, 'entregas');

  const getEntregas = async () => {
    const data = await getDocs(entregasCollection);
    setEntregas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
