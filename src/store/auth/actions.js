import axios from 'axios';

export const LOGIN = 'LOGIN';
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const SIGN_OUT = 'SIGN_OUT';

const url = 'http://localhost:8000/users/';

export const signIn = (username, history) => {
    return async (dispatch) => {
        await axios.get(url + `${username.login}`)
            .then(response => {
                console.log(response);
                dispatch({ type: LOGIN });
                localStorage.setItem('user', response.data.username);
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: ERROR_LOGIN,
                    payload: 'Invalid username'
                })
            })
    }
};

export const signOut = () => {
    localStorage.clear();
    return {
        type: SIGN_OUT
    }
};