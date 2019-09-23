import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from "redux";
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import session from './store/root';
import MainConstants from "./constants/MainConstants";


const user = localStorage.getItem('user');

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(session,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const dispatch = store.dispatch;
export default dispatch;

if(user) {
    store.dispatch({ type: MainConstants.actions.LOGIN, payload: user });
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));

