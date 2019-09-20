import MainConstants from "../../../constants/mainConstants";

export default  (state = {authenticate: false}, action) => {
    switch (action.type) {
        case MainConstants.actions.LOGIN:
            return { ...state, authenticate: true, login: action.payload};
        case MainConstants.actions.ERROR_LOGIN:
            return { ...state, authenticate: false, error: action.payload };
        case MainConstants.actions.SIGN_OUT:
            return {...state, authenticate: false};
        default:
            return state;
    }
}