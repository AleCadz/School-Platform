// Maestros.js
import React from 'react';
import './Tareas.css';
import logo from '../assets/logo.png';
import DatosProfesores from './DatosProfesores';

const Maestros = () => {
    const datosProfesoresProps = {
        firstColumnText1: 'Ing. Roberto Rangel Anguiano',
        firstColumnText2: 'Programacion Web',
        secondColumnText1: '831-XXX-XXX',
        secondColumnText2: 'example@gmail.com',
        secondColumnText3: 'example@gmail.com',
        imageUrl: 'URL_DE_LA_IMAGEN',
    };

    return (
        <div className="maestros-container" style={{ display: 'flex' }}>
            <div style={{ borderRight: '1px solid #ccc', paddingRight: '20px' }}>
                <div className="tareas-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={{ paddingLeft: '20px' }}>
                        <img src={logo} alt="logo" className="image" />
                    </div>
                    <div style={{ marginBottom: '50px' }}> <h3>¡Contacta a tus maestros!</h3></div>
                </div>
            </div>
            <div style={{ width: '70%' }}>
                <DatosProfesores {...datosProfesoresProps} />
                <hr style={{ margin: '20px 0', borderTop: '1px solid #ccc' }} />
                <DatosProfesores {...datosProfesoresProps} />
                <hr style={{ margin: '20px 0', borderTop: '1px solid #ccc' }} />
                {/* Agrega más instancias de DatosProfesores y líneas divisorias si es necesario */}
            </div>
        </div>
    );
};

export default Maestros;
