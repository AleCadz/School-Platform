import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {collection,getDocs, getDoc, deleteDoc} from 'firebase/firestore'
import {db} from '../firebaseConfig/firebase'
 
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const Ingresar = () =>{

const [entregas, setEntregas] = useState([])

const entregasCollection = collection(db, "entregas")

const getEntregas = async () => {
  const data = await getDocs(entregasCollection)
  console.log(data)
}

useEffect(()=>{
  getEntregas()
},[])

}

const ingresar = () => {
  return (
    <div>show</div>
  )
}

export default Ingresar