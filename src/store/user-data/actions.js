import axios from 'axios';

export const ADD_DATA = 'ADD_DATA';

const url = 'http://localhost:8000/data';

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

export const addData = (data, history) => {
    console.log('action',data);
    return async (dispatch) => {
        await axios.post(url, data, config)
            .then(response => {
                console.log(response)
            })
            .catch(error => {

            })
    }
    // return (dispatch) => {
    //     localStorage.setItem('data', JSON.stringify(data));
    //     dispatch({
    //         type: ADD_DATA,
    //         payload: data,
    //     })
    // }
};