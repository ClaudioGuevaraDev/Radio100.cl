import React, { Component } from 'react';
import './VideosPublicitarios.css';
import axios from 'axios';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';

class VideosPublicitarios extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listVideos: []
        }
    }

    componentDidMount() {
        axios.get(`${this.props.urlFiles}/video/show/listar`)
            .then((res) => {
                this.setState({
                    listVideos: res.data
                })
            })
            .catch((err) => {})
    }

    render() {
        return (
            <>
                {
                    this.state.listVideos.length > 0 ? (
                        <div className="container-fluid flyer-video-contenedor bg-light" id="videos">
                            <div className="container flyer-video" id="flyer-video">
                                <div className="row">
                                    <div className="d-flex flex-column align-items-center justify-content-center text-center mx-auto">
                                        <h2 className="titulo-videos display-4">Videos publicitarios</h2>
							            <p className="font-weight-normal parrafo">Formacios de los equipos, noticias en directo y mucho más!</p>
                                    </div>
                                </div>
                                <div className="row">
                                    {
                                        this.state.listVideos.map(archivo => {
                                            return (
                                                <div key={archivo} className="col-sm-6 col-md-4 mb-3">
                                                    <ReactPlayer
                                                    width="100%"
                                                    height="100%"
                                                    controls
                                                    url={`${this.props.url}/video/show/${archivo}`}
                                                    />
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
            </>
        )
    }
}

export default VideosPublicitarios;
