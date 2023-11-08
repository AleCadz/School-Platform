import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; // Importa el componente NavBar
import Cursos from './pages/Cursos';
import Home from './pages/Home';
import Tareas from './pages/Tareas';
import Maestros from './pages/Maestros'
import Documentos from './pages/Documentos'


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/Maestros" element={<Maestros />} />
        <Route path="/Documentos" element={<Documentos />} />
        <Route path="/" element={<Home />} />
        <Route path="/tareas" element={<Tareas />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
