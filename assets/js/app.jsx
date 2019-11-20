/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
/* eslint-disable */
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Home from "./components/home";
import AboutUs from "./components/about-us";

class App extends React.Component{
    render() {
        console.log('Render');
        return (
            <div>
                <nav className="navbar navbar-light">
                    <li><Link to="/">Homes</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                </nav>

                <Switch>
                    <Route exact={true} path="/" component={ Home } />
                    <Route path="/about-us" component={ AboutUs } />
                </Switch>>

            </div>
        )
    }
}

export default App;