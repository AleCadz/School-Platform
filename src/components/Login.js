import React from 'react';
import img from '../assets/logo.png'
import imgProfile from '../assets/imgAutomatas.png'
import { useState } from 'react';
import { collection, addDoc} from 'firebase/firestore'
import { appFireBase, db } from '../firebaseConfig/firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFireBase)



const Login = () => {
  const [registrando, setRegistrando] = useState(false)
  const usuariosCollection = collection(db, "usuarios")
  const funAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contrasena = e.target.password.value;
    
    if(registrando){
      await addDoc(usuariosCollection, { Correo: correo, Tipo: 'Alumno'})
      await createUserWithEmailAndPassword(auth, correo, contrasena)
    }else{
      await signInWithEmailAndPassword(auth, correo, contrasena)
    }

  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='padre'>
            <div className='card card-body'>
              <img src={imgProfile} alt="" className='estiloProfile'></img>
              <form onSubmit={funAutenticacion}>
                <input type="text" placeholder="Ingresar email" className='cajaTexto' id='email' />
                <br></br>
                <input type="password" placeholder="Ingresar contraseña" className='cajaTexto' id='password' />
                <button className='btnForm'>{registrando ? "Registrate" : "Inicia Sesión"}</button>
              </form>
              <h4 className='texto'>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button onClick={() => setRegistrando(!registrando)} className='btnSwitch'>{registrando ? "Inicia Sesion" : "Registrate"}</button></h4>
            </div>
          </div>
        </div>

        <div className='col-md-8'>
          <img src={img} alt="" className='tamanoImagen'></img>
        </div>

      </div>
    </div>
  )
}

export default Login;
