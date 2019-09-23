import axios from 'axios';
import dispatch from "../../../index";
import MainConstants from "../../../constants/MainConstants";

const signIn = (username) => {
    axios.get(MainConstants.url.users + `${username.login}`)
            .then(response => {
                dispatch({
                    type: MainConstants.actions.LOGIN,
                    payload: username.login
                });
                localStorage.setItem('user', response.data.username);
            })
            .catch(() => {
                dispatch({
                    type: MainConstants.actions.ERROR_LOGIN,
                    payload: 'Invalid username'
                })
            })
};

const signOut = () => {
    localStorage.clear();
    dispatch({ type: MainConstants.actions.SIGN_OUT })
};

const actionsLogin = {
    signIn,
    signOut,
};

export default actionsLogin;