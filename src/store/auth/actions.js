import axios from 'axios';
import dispatch from "../../index";

export const LOGIN = 'LOGIN';
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const SIGN_OUT = 'SIGN_OUT';

const url = 'http://localhost:8000/users/';

export const signIn = (username, history) => {
    return async () => {
        await axios.get(url + `${username.login}`)
            .then(response => {
                dispatch({
                    type: LOGIN,
                    payload: username.login
                });
                localStorage.setItem('user', response.data.username);
            })
            .catch(error => {
                dispatch({
                    type: ERROR_LOGIN,
                    payload: 'Invalid username'
                })
            })
    }
};

export const signOut = () => {
    localStorage.clear();
    dispatch({ type: SIGN_OUT })
};