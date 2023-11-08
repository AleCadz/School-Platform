import './Tareas.css';
import logo from '../assets/logo.png';

const Tareas = () => {
    return (
        <div className="tareas-container" style={{ display: 'flex' }}>
            <div style={{ borderRight: '1px solid #ccc', paddingRight: '20px' }}>
                <div className="tareas-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={{ marginBottom: '50px' }}>Asignadas</div>
                    <div style={{ marginBottom: '50px' }}>Sin entregar</div>
                    <div>Entregadas</div>
                    <div style={{ paddingLeft: '20px' }}>
                        <img src={logo} alt="logo" className="image" /> { }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tareas;
