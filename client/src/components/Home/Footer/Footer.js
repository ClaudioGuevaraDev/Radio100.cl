import React, { Component } from 'react';
import './Footer.css';

import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter';
import { BiRadio } from '@react-icons/all-files/bi/BiRadio';
import { CgWebsite } from '@react-icons/all-files/cg/CgWebsite';

class Footer extends Component {
    render () {
        return (
            <footer id="contacto">
                <div className="contenedor footer-content">
                    <div className="contact-us">
                        <h2 className="brand">Radio100.cl</h2>
                        <p>Providencia, Chile</p>
                    </div>
                    <div className="social-media">
                        <a href="https://twitter.com/radio100_cl?lang=es" target="_blank" className="social-media-icon">
                            <i><FaTwitter/></i>
                        </a>
                        <a href="https://tunein.com/radio/Radio-100-s283637/?lang=es" target="_blank" className="social-media-icon">
                            <i><BiRadio/></i>
                        </a>
                        <a href="https://www.100x100azules.cl/" target="_blank" className="social-media-icon">
                            <i><CgWebsite/></i>
                        </a>
                    </div>
                </div>
                <div className="line"></div>
            </footer>
        )
    }
}

export default Footer;