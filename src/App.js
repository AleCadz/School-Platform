import './App.css';
import Ingresar from './components/Ingresar'
import Login from './components/Login';
import Show from './components/Show'
import Create from './components/Create'
import Edit from './components/Edit'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar'; // Importa el componente NavBar
import Cursos from './pages/Cursos';
import Home from './pages/Home';
import Tareas from './pages/Tareas';
import Maestros from './pages/Maestros'
import Documentos from './pages/Documentos'
import ProgWeb from './pages/ProgWeb'
import { appFireBase, db } from './firebaseConfig/firebase';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appFireBase)



function App() {
  const [usuario, setUsuario] = useState(null)
  const [cargando, setCargando] = useState(true); // Nuevo estado para indicar si se está cargando la información del usuario

  onAuthStateChanged(auth, (usuarioFireBase) => {
    if (usuarioFireBase) {
      setUsuario(usuarioFireBase)
    } else {
      setUsuario(null)
    }

    // Una vez que se haya determinado el usuario, se establece cargando a false
    setCargando(false);
  })

  // Mientras se está cargando, puedes mostrar un spinner o cualquier indicador de carga
  if (cargando) {
    return <div>Cargando...</div>;
  }

  // Después de cargar, se renderiza la aplicación según el estado del usuario
  return (
    <div>
      {usuario ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/Cursos" element={<Cursos />} />
            <Route path="/Maestros" element={<Maestros />} />
            <Route path="/Documentos" element={<Documentos />} />
            <Route path="/tareas" element={<Tareas />} />
            <Route path="/ProgWeb" element={<ProgWeb/>} />
            <Route path="/create" element={<Create/>}/>
            <Route path="/edit" element={<Edit/>}/>
            <Route path="/show" element={<Show/>}/>
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Home correoUsuario={usuario.email}/>} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;