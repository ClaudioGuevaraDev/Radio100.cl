import React, { Component } from 'react';
import './AfichesPublicitarios.css';
import axios from 'axios';

class AfichesPublicitarios extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listaAfiches: []
        }
    }

    componentDidMount() {
        axios.get(`${this.props.urlFiles}/afiche/show/listar`)
            .then((res) => {
                this.setState({
                    listaAfiches: res.data
                })
            })
            .catch((err) => {})
    }

    render() {
        return (
            <div>
                {
                    this.state.listaAfiches.length > 0 ? (
                        <div className="container-fluid flyers" id="flyer">
                            <div className="container">
                                <div className="row">
                                    <div className="d-flex flex-column align-items-center justify-content-center text-center mx-auto">
                                        <h2 className="titulo-afiches display-4">Afiches publicitarios</h2>
                                        <p className="parrafo font-weight-normal">Enterate de las noticias del momento, tanto en el deporte, ciencia y en el país entero!</p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    {
                                        this.state.listaAfiches.map((archivo) => {
                                            return (
                                                <div key={archivo} className="item col-sm-6 col-md-4 mb-3">
                                                    <img width="100%" height="400px" src={`${this.props.url}/afiche/show/${archivo}`} alt={archivo} className="flyer__img"/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )
                }
            </div>
        )
    }
}

export default AfichesPublicitarios;