import axios from 'axios';
import qs from 'qs';
import Api from '../../../utils/api';
import dispatch from '../../../index';
import MainConstants from "../../../constants/mainConstants";

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

const setData = (data, username) => {
    const payload = {
        ...data,
        username: username
    };
    axios.post(MainConstants.url.data, qs.stringify(payload), config)
            .then(response => {
                dispatch({
                    type: MainConstants.actions.ADD_DATA,
                    payload: response.data
                });
                localStorage.setItem('data', JSON.stringify(response.data))
            })
};

const getData = username => {
    Api.getDataUser(username)
            .then(response => {
                dispatch({
                    type: MainConstants.actions.ADD_DATA,
                    payload: response.data,
                });
                localStorage.setItem('data', JSON.stringify(response.data))
            })
};

const actionsData = {
    getData,
    setData
};

export default actionsData