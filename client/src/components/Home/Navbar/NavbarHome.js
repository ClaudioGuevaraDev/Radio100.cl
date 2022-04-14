import React, { Component } from 'react';
import './NavbarHome.css';
import Logo from '../../../assets/png/logo.png';
import { FiSettings } from '@react-icons/all-files/fi/FiSettings';
import { Link } from 'react-router-dom';


class NavbarHome extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 sticky-top">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand"><img className="logo" alt="logo-radio100.cl" src={Logo}></img></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>    
                    </button>
                    <h1 className="titulo_principal">Radio100.cl</h1>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a href="#inicio" className="nav-link nav-link-principal active">Inicio</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link nav-link-principal active text-primary" href="#radio">Radio en vivo</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link nav-link-principal active" href="#flyer">Afiches</a>
                            </li>
                            <li className="nav-item nav-link-principal active">
                                <a className="nav-link" href="#videos">Videos</a>
                            </li>
                            <li className="nav-item nav-link-principal active">
                                <a className="nav-link" href="#contacto">Redes</a>
                            </li>
                            <li className="nav-item nav-link-principal active">
                                <Link className="nav-link" to="/login"><FiSettings/></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavbarHome;