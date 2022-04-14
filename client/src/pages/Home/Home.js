import React, { Fragment } from 'react';
import './Home.css'

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import NavbarHome from '../../components/Home/Navbar/NavbarHome';
import PortadaSlider from '../../components/Home/PortadaSlider/PortadaSlider';
import Radio from '../../components/Home/Radio/Radio';
import About from '../../components/Home/About/About';
import AfichesPublicitarios from '../../components/Home/AfichesPublicitarios/AfichesPublicitarios';
import VideosPublicitarios from '../../components/Home/VideosPublicitarios/VideosPublicitarios';
import Footer from '../../components/Home/Footer/Footer';

export default function Home(props) {
    const url = props.url;
    const urlFiles = props.urlFiles;

    return (
        <Fragment>
            <NavbarHome/>
            <Fade duration={3300}><PortadaSlider url={url} urlFiles={urlFiles}/></Fade>
            <Zoom duration={4000}><Radio/></Zoom>
            <About/>
            <Zoom duration={1000}><AfichesPublicitarios url={url} urlFiles={urlFiles}/></Zoom>
            <Zoom duration={1000}><VideosPublicitarios url={url} urlFiles={urlFiles}/></Zoom>
            <Fade duration={3300}><Footer/></Fade>
        </Fragment>
    )
}