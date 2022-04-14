import React, { Fragment, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router';

import AccesoDenegado from '../AccesoDenegado/AccesoDenegado';
import NavbarAdmin from '../../components/Admin/NavbarAdmin';
import NavigationTabs from '../../components/Admin/NavigationTabs';

let cookies = new Cookies();

export default function Admin(props) {
    const url = props.url;
    const urlFiles = props.urlFiles;
    let user = false;
    const history = useHistory();

    if(cookies.get('login') === 'logeado') {
        user = true;
    }
    
    useEffect(() => {
        if(cookies.get('login') !== 'logeado') {
            setTimeout(() => {
                history.replace('/');
            }, 3000);
        }
    }, []);

    return (
        <Fragment>
            {
                user === true ? (
                    <div>
                        <NavbarAdmin/>
                        <div className="container p-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <NavigationTabs url={url} urlFiles={urlFiles}/>
                                </div>
                            </div>
                        </div>
                    </div> 
                ) : (
                    <AccesoDenegado/>
                )
            }
        </Fragment>
    )
}