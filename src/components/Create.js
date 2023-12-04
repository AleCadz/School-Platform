import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from 'firebase/firestore'
import { db } from "../firebaseConfig/firebase"

const Create = () => {
    const [alumno, setAlumno] = useState('')
    const [curso, setCurso] = useState('')
    const navigate = useNavigate()
    const [descripcion, setDescripcion] = useState('')
    const [fechaEntrega, setFechaEntrega] = useState('')
    const [titulo, setTitulo] = useState('')

    const entregasCollection = collection(db, "entregas")

    const store = async (e) => {

        e.preventDefault()
        await addDoc(entregasCollection, { Titulo: titulo, Alumno: alumno, Descripcion: descripcion, Curso: curso, FechaEntrega: fechaEntrega })
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
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                type="text"
                                className='form-control'
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Descripcion</label>
                            <input
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
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
                            <label className='form-label'>Alumno</label>
                            <input
                                value={alumno}
                                onChange={(e) => setAlumno(e.target.value)}
                                type="text"
                                className='form-control'
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Fecha de entrega</label>
                            <input
                                value={fechaEntrega}
                                onChange={(e) => setFechaEntrega(e.target.value)}
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