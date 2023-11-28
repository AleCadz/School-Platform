import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateDoc, doc, getDoc } from "firebase/firestore" // Import getDoc here
import { db } from "../firebaseConfig/firebase"

const EditAlumno = () => {
    const [Enlace, setEnlace] = useState('')
    const [editingEnlace, setEditingEnlace] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        const product = doc(db, "entregas", id)
        const data = { Enlace: Enlace }
        await updateDoc(product, data)
        navigate('/')
    }

    useEffect(() => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])

    const getProductById = async (id) => {
        const product = await getDoc(doc(db, "entregas", id))
        if (product.exists()) {
            setEnlace(product.data().Enlace)
        } else {
            console.log('El producto no existe')
        }
    }

    const handleEnlaceEdit = () => {
        setEditingEnlace(true)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Editar Enlace</h1>
                    <form onSubmit={update}>
                        {editingEnlace ? (
                            <div className='mb-3'>
                                <label className='form-label'>Enlace</label>
                                <input
                                    value={Enlace}
                                    onChange={(e) => setEnlace(e.target.value)}
                                    type="text"
                                    className='form-control'
                                />
                                <button type='submit' className='btn btn-primary'>Actualizar</button>
                            </div>
                        ) : (
                            <div>
                                <p>¿Editar Enlace?</p>
                                <button onClick={handleEnlaceEdit} className='btn btn-secondary'>Editar Enlace</button>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditAlumno
