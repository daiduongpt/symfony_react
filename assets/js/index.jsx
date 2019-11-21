// CSS
import 'semantic-ui-css/semantic.min.css';
require('../css/app.scss');
const $ = require('jquery');
require('bootstrap');

import React from 'react';
import ReactDom from 'react-dom';
import App from './app.jsx'
import { BrowserRouter } from 'react-router-dom';
import store from "./stores/index"
import {Provider} from "react-redux";


ReactDom.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
