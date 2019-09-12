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

const setData = (data, username) => {
    const payload = {
        ...data,
        username: username
    };
    console.log("+");
    axios.post(url, qs.stringify(payload), config)
            .then(response => {
                dispatch({
                    type: ADD_DATA,
                    payload: response.data
                });
                localStorage.setItem('data', JSON.stringify(response.data))
            })
            .catch(error => {

            })
};

const getData = username => {
    Api.getDataUser(username)
            .then(response => {
                dispatch({
                    type: ADD_DATA,
                    payload: response.data,
                });
                localStorage.setItem('data', JSON.stringify(response.data))
            })
            .catch(error => {

            })
};

const actionsData = {
    getData,
    setData
};

export default actionsData