import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import reduxThunk from 'redux-thunk';
import session from './store/index';
import { LOGIN } from "./store/auth/actions";
import { BrowserRouter } from "react-router-dom";


const user = localStorage.getItem('user');

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(session,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const dispatch = store.dispatch;
export default dispatch;

if(user) {
    store.dispatch({ type: LOGIN, payload: user });
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));

