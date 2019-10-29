/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('../css/app.scss');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
const $ = require('jquery');
require('bootstrap');

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from "./components/base";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Home/>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'));
