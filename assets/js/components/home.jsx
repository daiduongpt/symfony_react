import React from 'react';
import {withRouter} from 'react-router-dom';
import { createStore } from 'redux';
import cartStore from '../stores/cart-store'
import * as cartAction from '../actions/cart-actions'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: [],
            reload: false
        };
    }

    componentDidMount() {
        this.addToCart();
    }

    addToCart() {
        cartStore.dispatch(
            cartAction.addToCart('Test', 10, 20)
        );

        this.setState({
            reload: true
        })
    }

    render() {
        return (
            <div className="row">
                <p>This is home page</p>
            </div>
        );
    }
}

export default withRouter(Home)