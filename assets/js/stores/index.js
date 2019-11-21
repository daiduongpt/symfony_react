import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import { createPromise } from 'redux-promise-middleware';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/index"

const promise = createPromise();
const middleware = composeWithDevTools(applyMiddleware(promise, thunk));

export default createStore(rootReducer, middleware);
