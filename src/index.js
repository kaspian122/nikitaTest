import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import reduxThunk from 'redux-thunk';
import session from './store/index';
import { LOGIN } from "./store/auth/actions";
import {ADD_DATA} from "./store/user-data/actions";

const user = localStorage.getItem('user');
const data = localStorage.getItem('data');

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(session,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

if(user) {
    store.dispatch({ type: LOGIN })
}

if(data) {
    store.dispatch({ type: ADD_DATA })
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

