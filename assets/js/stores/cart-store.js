import {combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cardReducer from '../reducers/cart-reducer';

/*const allReducers = {
    shoppingCart: cardReducer,
    ...
}*/
// const rootReducer = combineReducers(allReducers);

let store = createStore(cardReducer, composeWithDevTools());

export default store;
