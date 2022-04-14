import React from 'react';
import { Link } from 'react-router-dom';
import { GrLogout } from '@react-icons/all-files/gr/GrLogout';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router-dom';

let cookies = new Cookies();

export default function NavbarAdmin() {
    const history = useHistory();

    const cerrarSesion = () => {
        cookies.remove('login');
        history.replace('/');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Radio100.cl</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" onClick={cerrarSesion}><i className="nav-link"><GrLogout/></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

