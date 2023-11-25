import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"

const Edit = () => {
    const [ Alumno, setAlumno ] = useState('')
    const [ Contenido, setContenido ] = useState('')
    const [ Curso, setCurso ] = useState('')
    const [ Tarea, setTarea ] = useState('')

    const navigate = useNavigate()    
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const product = doc(db, "entregas", id)
        const data = {Alumno: Alumno, Contenido: Contenido, Curso: Curso, Tarea: Tarea}
        await updateDoc(product, data)
        navigate('/')
    }

    const getProductById = async (id) => {
        const product = await getDoc( doc(db, "entregas", id) )
        if(product.exists()) {
            //console.log(product.data())
            setAlumno(product.data().Alumno)    
            setContenido(product.data().Contenido)
            setCurso(product.data().Curso)    
            setTarea(product.data().Tarea)
        }else{
            console.log('El producto no existe')
        }
    }

    useEffect( () => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Editar entrega</h1>
                 <form onSubmit={update}>
                    <div className='mb-3'>
                        <label className='form-label'>Alumno</label>
                        <input
                            value={Alumno}
                            onChange={ (e) => setAlumno(e.target.value)} 
                            type="text"
                            className='form-control'
                        />
                    </div>  

                    <div className='mb-3'>
                        <label className='form-label'>Contenido</label>
                        <input
                            value={Contenido}
                            onChange={ (e)=> setContenido(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div>  

                    <div className='mb-3'>
                        <label className='form-label'>Curso</label>
                        <input
                            value={Curso}
                            onChange={ (e)=> setContenido(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div>  

                    <div className='mb-3'>
                        <label className='form-label'>Tarea</label>
                        <input
                            value={Tarea}
                            onChange={ (e)=> setContenido(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div>  

                    <button type='submit' className='btn btn-primary'>Actualizar</button>
                 </form>   
            </div>
        </div>
    </div> 
    )
}

export default Edit