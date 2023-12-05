// Documentos.js
import React from 'react';
import './Tareas.css';
import logo from '../assets/logo.png';

const Documentos = () => {
    const datosProfesoresProps = [
        {
            firstColumnText1: 'Alejandro del Castillo Díaz',
            firstColumnText2: 'Creador del sitio web',
            secondColumnText1: '831-107-5453',
            secondColumnText2: 'alejandrodelcastillodiaz@gmail.com',
            secondColumnText3: 'delcastillo.diaz.20067@itsmante.edu.mx',
        }
    ];

    return (
        <div className="Documentos-container" style={{ display: 'flex' }}>
            <div style={{ borderRight: '1px solid #ccc', paddingRight: '20px' }}>
                <div className="tareas-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={{ paddingLeft: '20px' }}>
                        <img src={logo} alt="logo" className="image" />
                    </div>
                    <div style={{ marginBottom: '50px' }}>
                        <h3>¡Contacta al creador del sitio!</h3>
                    </div>
                </div>
            </div>
            <div className="profesores-grid">
                {datosProfesoresProps.map((profesor, index) => (
                    <div key={index} className="profesor-card">
                        <div>
                            <h4>{profesor.firstColumnText1}</h4>
                            <p>{profesor.firstColumnText2}</p>
                            <p>{profesor.secondColumnText1}</p>
                            <p>{profesor.secondColumnText2}</p>
                            <p>{profesor.secondColumnText3}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Documentos;
