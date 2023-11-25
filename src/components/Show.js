import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const Show = () => {

  const [entregas, setEntregas] = useState([])

  const entregasCollection = collection(db, "entregas")
  //obtener
  const getEntregas = async () => {
    const data = await getDocs(entregasCollection)
    setEntregas(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    )
    console.log(entregas)
  }
  //borrar
  const deleteEntrega = async (id) => {

    const entregaDoc = doc(db, "entregas", id)
    await deleteDoc(entregaDoc)
    getEntregas()
  }

const confirmDelete = (id) =>{
  MySwal.fire({
    title: "¿Estas seguro?",
    text: "No puedes deshacer esto",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, borrar"
  }).then((result) => {
    if (result.isConfirmed) {
      deleteEntrega(id)
      MySwal.fire({
        title: "¡Eliminado!",
        text: "Tu archivo ha sido borrado",
        icon: "success"
      });
    }
  });
}

  useEffect(() => {
    getEntregas()
  }, [])
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='d-grid gap-2'>
              <Link to="/create" className='btn btn.secondary mt-2 mb-2'>Create</Link>

            </div>
            <table className='table table-dark table-hover'>
              <thead>
                <tr>
                  <th>Alumno</th>
                  <th>Curso</th>
                  <th>Tarea</th>
                  <th>Contenido</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {entregas.map((entrega)=> (
                  <tr key={entrega.id}>
                    <td>{entrega.Alumno}</td>
                    <td>{entrega.Curso}</td>
                    <td>{entrega.Tarea}</td>
                    <td>{entrega.Contenido}</td>
                    <td>
                    <Link to={`/edit/${entrega.id}`}><i className="fa-solid fa-pen"></i></Link>
                      <button onClick={()=> {confirmDelete(entrega.id)}} className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
                    </td>
                  </tr>
                )) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Show