import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

let cookies = new Cookies();

toast.configure();
export default function Login(props) {
    const urlLogin = props.urlLogin;
    let history = useHistory();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            "username": userName,
            "password": password
        }

        setIsLoading(true);
        axios.post(`${urlLogin}/buscar`, data)
            .then((res) => {
                if(res.data === false || res.data === "Usuario no encontrado") {
                    cookies.set('login', 'no logeado');
                    document.getElementById('username').value = '';
                    document.getElementById('password').value = '';
                    toast.error('Usuario no encontrado.', {
                        position: 'top-center',
                        autoClose: 7000
                    });
                }

                if(res.data === true) {
                    cookies.set('login', 'logeado');
                    history.replace('/admin');
                }
                setIsLoading(false);
            })
            .catch((err) => {
                cookies.set('login', 'no logeado');
                if(err !== null) {
                    toast.error('Error del servidor. Inténtalo en otro momento', {
                        position: 'top-center',
                        autoClose: 7000
                    });
                }
            })
    }

    return (
        <div className="container-fluid content-login bg-primary">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h2>Inicio de sesión</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <input id="username" onChange={onChangeUserName} type="text" placeholder="Nombre de Usuario" className="form-control" required autoFocus/>
                                </div>
                                <div className="form-group">
                                    <input id="password" onChange={onChangePassword} type="password" placeholder="Contraseña" className="form-control" required></input>
                                </div>
                                {
                                    !isLoading ? (
                                        <button className="btn btn-primary mr-3">Inicio de sesión</button>
                                    ) : (
                                        <button class="btn btn-primary mr-3" type="button">
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        </button>
                                    )
                                }
                                <Link className="btn btn-danger" to="/">Cancelar</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}