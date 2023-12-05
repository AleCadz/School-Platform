import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateDoc, doc, getDoc } from "firebase/firestore" 
import { uploadFile } from "../firebaseConfig/firebase"
import { db } from "../firebaseConfig/firebase"


const EditAlumno = () => {
    const [Archivo, setArchivo] = useState('')
    const [editingArchivo, setEditingArchivo] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        handleSubmit()
        const product = doc(db, "entregas", id)
        const data = { Archivo: Archivo }
        await updateDoc(product, data)

    }

    useEffect(() => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])

    const getProductById = async (id) => {
        const product = await getDoc(doc(db, "entregas", id))
        if (product.exists()) {
            setArchivo(product.data().Archivo)
        } else {
            console.log('El producto no existe')
        }
    }

    const handleArchivoEdit = () => {
        setEditingArchivo(true)
    }

    const [file, setFile] = useState(null)
    const handleSubmit = async (e) => {
        try {
            const result = await uploadFile(file, id);
            console.log(result)
        } catch(error){
            console.error(error)
            alert('Fallo al subir')
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Editar Tarea</h1>
                    <form onSubmit={update}>
                        {editingArchivo ? (
                            <div className='mb-3'>
                                <label className='form-label'>Archivo</label>
                                <input type="file" name="" id="" onChange={e => setFile(e.target.files[0], id)} />
                                <input
                                    value={Archivo}
                                    onChange={(e) => setArchivo(e.target.value)}
                                    type="text"
                                    className='form-control'
                                />
                                <button type='submit' className='btn btn-primary'>Actualizar</button>
                            </div>
                        ) : (
                            <div>
                                <p>¿Editar Tarea?</p>
                                <button onClick={handleArchivoEdit} className='btn btn-secondary'>Editar Archivo</button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditAlumno
