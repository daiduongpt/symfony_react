import AboutUsConstants from '../contants/about-us-constants'

const initialState = {
    contacts: []
}

export default function (state=initialState, action={}) {
    switch (action.type) {
        case AboutUsConstants.FETCH_CONTACTS_FULFILLED: {
            return {
                ...state,
                contacts: action.payload.data.data
            }
        }
        default: {
            return state;
        }
    }
}
