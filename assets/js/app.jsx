/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
/* eslint-disable */
import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Home from "./components/home";
import AboutUs from "./components/about-us";

class App extends React.Component{
    render() {
        return (
            <Container>
                <div>
                    <div className="ui two item menu">
                        <NavLink className="item" activeClassName="active" exact to="/">Homes</NavLink>
                        <NavLink className="item" activeClassName="active" exact to="/about-us">About Us</NavLink>
                    </div>
                    <Route exact={true} path="/" component={ Home } />
                    <Route path="/about-us" component={ AboutUs } />
                </div>
            </Container>
        )
    }
}

export default App;