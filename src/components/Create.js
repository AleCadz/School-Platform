import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from 'firebase/firestore'
import { db } from "../firebaseConfig/firebase"

const Create = () => {
    const [alumno, setAlumno] = useState('')
    const [contenido, setContenido] = useState('')
    const [curso, setCurso] = useState('')
    const [tarea, setTarea] = useState('')
    const [rutaCurso, setRutaCurso] = useState('')
    const navigate = useNavigate()

    const entregasCollection = collection(db, "entregas")

    const store = async (e) => {

        e.preventDefault()
        await addDoc(entregasCollection, { Alumno: alumno, Contenido: contenido, Curso: curso, Tarea: tarea, RutaCurso: rutaCurso })
        navigate('/create')

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Crear Tarea</h1>
                    <form onSubmit={store}>
                        <div className='mb-3'>
                            <label className='form-label'>Titulo</label>
                            <input
                                value={alumno}
                                onChange={(e) => setAlumno(e.target.value)}
                                type="text"
                                className='form-control'
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Descripcion</label>
                            <input
                                value={contenido}
                                onChange={(e) => setContenido(e.target.value)}
                                type="text"
                                className='form-control'
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Curso</label>
                            <input
                                value={curso}
                                onChange={(e) => setCurso(e.target.value)}
                                type="text"
                                className='form-control'
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Fecha de entrega</label>
                            <input
                                value={tarea}
                                onChange={(e) => setTarea(e.target.value)}
                                type="text"
                                className='form-control'
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Ruta curso</label>
                            <input
                                value={rutaCurso}
                                onChange={(e) => setRutaCurso(e.target.value)}
                                type="text"
                                className='form-control'
                            />
                        </div>

                        <button type="submit" className="btn btn-primary"></button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Create