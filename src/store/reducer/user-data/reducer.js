import MainConstants from "../../../constants/MainConstants";

export default  (state = {}, action) => {
    switch (action.type) {
        case MainConstants.actions.ADD_DATA:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}