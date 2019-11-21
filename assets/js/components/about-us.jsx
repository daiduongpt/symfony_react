import React from 'react';
import { connect } from "react-redux";
import { fetchContacts } from "../actions/about-us-actions";
import { getContacts } from "../selectors/about-us-selector";

class AboutUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        this.props.fetchContacts();
    }

    renderContactList(contacts) {
        return contacts.map(contact => {
            return (
                <li key={contact._id}>{contact.name.firstName}{contact.name.lastName}</li>
            )
        })
    }

    render() {
        const {contacts} = this.props;

        return (
            <div className="row">
                <h1>List of Contacts</h1>
                {
                    contacts ?
                        <ul>
                            { this.renderContactList(contacts) }
                        </ul>
                    :
                    null
                }
            </div>
        );
    }
}

// Make contacts array available in props
// Call from selector
const mapStateToProps = state => {
    return {
        contacts : getContacts(state.aboutUsStore)
    }
}

// Make component receives some actions
const mapDispatchToProps = dispatch => {
    return {
        fetchContacts: () => dispatch(fetchContacts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);