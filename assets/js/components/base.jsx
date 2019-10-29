import React from 'react';
import {withRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            entries: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(entries => {
                this.setState({
                    entries
                });
            });
    }

    render() {
        return (
            <div className="row">
                <input type={'text'} placeholder={'Input value here'}/>
            </div>
        );
    }
}

export default withRouter(Home)