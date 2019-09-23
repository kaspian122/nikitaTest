import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import user from './reducer/auth/reducer';
import data from './reducer/user-data/reducer';

export default combineReducers({
    user,
    data,
    form: formReducer,
})