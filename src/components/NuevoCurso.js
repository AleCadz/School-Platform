import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';

const NuevoCurso = () => {
  const [nuevoCurso, setNuevoCurso] = useState({
    title: '',
    image: '', // Puedes manejar la imagen de manera similar a cómo lo haces en el componente Cursos
    link: '', // URL del nuevo curso
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoCurso({ ...nuevoCurso, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Agregar el nuevo curso a la base de datos
      const cursosCollection = collection(db, 'cursos');
      await addDoc(cursosCollection, nuevoCurso);

      // Reiniciar el formulario después de agregar el curso
      setNuevoCurso({
        title: '',
        image: '',
        link: '',
      });

      // Puedes agregar lógica adicional, como redirigir a la página de cursos, mostrar un mensaje de éxito, etc.
    } catch (error) {
      console.error('Error al agregar el curso:', error);
    }
  };

  return (
    <div>
      <h1>Agregar Nuevo Curso</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Título del Curso
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={nuevoCurso.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          {/* Input para la imagen */}
        </div>
        <div className="mb-3">
          <label htmlFor="link" className="form-label">
            Enlace del Curso
          </label>
          <input
            type="text"
            className="form-control"
            id="link"
            name="link"
            value={nuevoCurso.link}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Curso
        </button>
      </form>
    </div>
  );
};

export default NuevoCurso;
