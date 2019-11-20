import Immutable from 'seamless-immutable'
import CartConstants from '../contants/cart-constants'
import {
    clone,
    findIndex,
    insert,
    mergeAll,
    reject,
    update,
    append
} from 'ramda'

const initialState = {
    carts: []
}

export default function (state=initialState, action) {
    switch (action.type) {
        case CartConstants.ADD_PRODUCT_TO_CART: {
            let newState = insert(
                state.length,
                action.payload,
                clone(state)
            )

            return newState
        }
        default: {
            return state;
        }
    }
}