import { combineReducers } from "redux";
import user from './auth/reducer';
import data from './user-data/reducer';
import {reducer as formReducer} from "redux-form";

export default combineReducers({
    user,
    data,
    form: formReducer,
})