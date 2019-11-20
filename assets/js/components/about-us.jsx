import React from 'react';
import {withRouter} from 'react-router-dom';

class AboutUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="row">
                <p>This is about us page</p>
            </div>
        );
    }
}

export default withRouter(AboutUs)