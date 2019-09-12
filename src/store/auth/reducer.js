import {LOGIN, ERROR_LOGIN, SIGN_OUT} from "./actions";

export default  (state = {authenticate: false}, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, authenticate: true};
        case ERROR_LOGIN:
            return { ...state, authenticate: false, error: action.payload };
        case SIGN_OUT:
            return {...state, authenticate: false};
        default:
            return state;
    }
}