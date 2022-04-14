import React, { Component } from 'react';
import Logo from '../../../assets/jpeg/logo2.jpeg';
import './Radio.css';

class Radio extends Component {
    render() {
        return (
            <div className="radio container-fluid bg-white" id="radio">
                <div className="row welcome d-flex flex-column align-items-center justify-content-center text-center">
                    <div className="col-md-12">
                        <blockquote className="blockquote text-center">
                            <h4 className="titulo-radio mb-0 display-4">Radio100 <span className="text-primary">en vivo</span></h4>
                            <p className="parrafo">Más de 100 razones para escucharnos</p>
                        </blockquote>
                        <hr className="mx-auto"></hr>
                        <div className="mt-1 d-flex justify-content-center">
                            <div className="player">
                                <div className="imgBx">
                                    <img src={Logo} alt="Logo de la radio"></img>
                                </div>
                                <audio controls src="https://stream.polarhost.cl/Radio100"></audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Radio;