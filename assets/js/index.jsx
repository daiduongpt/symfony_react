// CSS
require('../css/app.scss');
const $ = require('jquery');
require('bootstrap');

import React from 'react';
import ReactDom from 'react-dom';

import App from './app.jsx'

import { BrowserRouter } from 'react-router-dom';

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
