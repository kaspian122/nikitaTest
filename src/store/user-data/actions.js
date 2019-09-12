import axios from 'axios';
import qs from 'qs';
import Api from '../../utils/api';
import dispatch from "../../index";

export const ADD_DATA = 'ADD_DATA';

const url = 'http://localhost:8000/data/';

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

export const setData = (data, username) => {
    const payload = {
        ...data,
        username: username
    };
    return async () => {
        await axios.post(url, qs.stringify(payload), config)
            .then(response => {
                dispatch({
                    type: ADD_DATA,
                    payload: response.data
                });
                localStorage.setItem('data', JSON.stringify(response.data))
            })
            .catch(error => {

            })
    }
};

export const getData = username => {
    return async () => {
        await Api.getDataUser(username)
            .then(response => {
                dispatch({
                    type: ADD_DATA,
                    payload: response.data,
                });
                localStorage.setItem('data', JSON.stringify(response.data))
            })
            .catch(error => {

            })
    }
};