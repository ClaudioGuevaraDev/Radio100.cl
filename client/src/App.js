import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css';
import './App.css';

import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import NoMatch from './pages/NoMatch/NoMatch';
import Login from './pages/Login/Login';

const url = 'http://localhost:2020';
const urlFiles = 'http://localhost:2020/files';
const urlLogin = 'http://localhost:2020/login';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.fakeRequest().then(() => {
            const el = document.querySelector('.loader-container');
            if (el) {
                el.remove();
                this.setState({
                    loading: false
                });
            }
        });
    }

    fakeRequest = () => {
        return new Promise(resolve => setTimeout(() => resolve(), 2000));
    };


    render () {
        if (this.state.loading) {
            return null;
        }

        return (
            <BrowserRouter basename="/">
                <Switch>
                    <Route exact path="/">
                        <Home url={url} urlFiles={urlFiles}/>
                    </Route>
                    <Route exact path="/admin">
                        <Admin url={url} urlFiles={urlFiles}/>
                    </Route>
                    <Route exact path="/login">
                        <Login urlLogin={urlLogin}/>
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
