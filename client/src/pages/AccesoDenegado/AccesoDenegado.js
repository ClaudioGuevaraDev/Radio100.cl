import React from 'react';
import './AccesoDenegado.css';
import Error from '../../assets/png/error.png';

function AccesoDenegado() {
    return (
        <div className="content-access">
            <div className="header">
                <img src={Error} alt="img-error"/>
                <p><h1>Acceso denegado</h1></p>
            </div>
        </div>
    )
}

export default AccesoDenegado;