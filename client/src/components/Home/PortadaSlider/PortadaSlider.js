import React, { Component } from 'react';
import './PortadaSlider.css';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

class PortadaSlider extends Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
        this.state = {
            listaImagens: [],
            url: this.props.url
        };
    }

    componentDidMount() {
        axios.get(`${this.props.urlFiles}/portada/show/listar`)
            .then((res) => {
                this.setState({
                    listaImagens: res.data
                })
            })
            .catch((err) => {
                if(err !== null){
                    console.log("error del servidor");
                }
            })
    }

    render() {
        return (
            <div id="inicio">
                <Carousel>
                    {
                        this.state.listaImagens.map(archivo => {
                            return (
                                <Carousel.Item key={archivo}>
                                    <img src={`${this.props.url}/portada/show/${archivo}`} className="img-slider" alt={archivo}/>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </div>
        );
    }
}

export default PortadaSlider;
