import React, { useEffect } from 'react';
import './NoMatch.css';
import { useHistory } from 'react-router-dom';

export default function NoMatch() {
    const history = useHistory();
    
    useEffect(() => {
        setTimeout(() => {
            history.replace('/');
        }, 4000)
    }, []);

    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h3>Oops! Page not found</h3>
                    <h1><span>4</span><span>0</span><span>4</span></h1>
                </div>
                <h2>Lo sentimos, pero la página solicitada no fue encontrada</h2>
            </div>
        </div> 
    )
}

