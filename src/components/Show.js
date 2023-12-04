import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Show.css';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db, storage } from '../firebaseConfig/firebase'; // Asegúrate de importar storage también
import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const Task = ({ entrega, deleteEntrega }) => {
  const { id, Alumno, Curso, Descripcion, FechaEntrega, Titulo } = entrega;
  const storageRef = ref(storage, `${id}`);

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

  const handleDownload = async () => {
    try {
      const downloadURL = await getDownloadURL(storageRef);
      window.open(downloadURL); // Abre el archivo en una nueva ventana del navegador
    } catch (error) {
      console.error('Error al obtener la URL de descarga:', error);
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
      <h5 className="card-title">{Titulo}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{Curso}</h6>
        <h6 className="card-subtitle mb-2 text-muted">{FechaEntrega}</h6>
        <p className="card-text">{Alumno}</p>
        <p className="card-text">{Descripcion}</p>
        <button onClick={confirmDelete} className="btn btn-danger">
          Borrar
        </button>
        <button onClick={handleDownload} className="btn btn-success">
          Descargar
        </button>
      </div>
    </div>
  );
};

const Show = () => {
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
          <div className="d-grid gap-2">
            <h1>Tareas de los alumnos</h1>
          </div>
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

export default Show;
