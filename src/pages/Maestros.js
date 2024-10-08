// Maestros.js
import React from 'react';
import './Tareas.css';
import logo from '../assets/logo.png';

const Maestros = () => {
    const datosProfesoresProps = [
        {
            firstColumnText1: 'Ing. Roberto Rangel Anguiano',
            firstColumnText2: 'Programacion Web',
            secondColumnText1: '831-XXX-XXX',
            secondColumnText2: 'example@gmail.com',
            secondColumnText3: 'example@gmail.com',
        },
        {
            firstColumnText1: 'Ing. Paulino Sanchez Perez',
            firstColumnText2: 'Enrutamiento web',
            secondColumnText1: '831-YYY-YYY',
            secondColumnText2: 'papulino@gmail.com',
            secondColumnText3: 'papulino@gmail.com',
        },
        {
            firstColumnText1: 'Lic. Marco Antonio Solis',
            firstColumnText2: 'Ingles',
            secondColumnText1: '831-ZZZ-ZZZ',
            secondColumnText2: 'marco@gmail.com',
            secondColumnText3: 'marco@gmail.com',
        },
    ];

    return (
        <div className="maestros-container" style={{ display: 'flex' }}>
            <div style={{ borderRight: '1px solid #ccc', paddingRight: '20px' }}>
                <div className="tareas-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={{ paddingLeft: '20px' }}>
                        <img src={logo} alt="logo" className="image" />
                    </div>
                    <div style={{ marginBottom: '50px' }}>
                        <h3>¡Contacta a tus maestros!</h3>
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

export default Maestros;
