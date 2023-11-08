import React from 'react';

const DatosProfesores = (props) => {
    const { firstColumnText1, firstColumnText2, secondColumnText1, secondColumnText2, secondColumnText3, imageUrl } = props;

    return (
        <div style={{ position: 'absolute', right: 0, top: 0, width: '30%', padding: '20px', backgroundColor: '#f9f9f9', display: 'flex' }}>
            <div style={{ flex: 1, marginRight: '20px' }}>
                <p>{firstColumnText1}</p>
                <p>{firstColumnText2}</p>
            </div>
            <div style={{ flex: 1, marginRight: '20px' }}>
                <p>{secondColumnText1}</p>
                <p>{secondColumnText2}</p>
                <p>{secondColumnText3}</p>
            </div>
            <div style={{ flex: 1 }}>
                <img src={imageUrl} alt="imagen" style={{ maxWidth: '100%' }} />
            </div>
        </div>
    );
};

export default DatosProfesores;
