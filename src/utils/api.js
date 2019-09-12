import { http } from "./apiConfig";

const urlLogin = '/users';
const urlData = '/data';

const getDataUser = username => http.get(`${urlData}/${username}`);
const setDataUser = (data, username) => http.post(`${urlData}`);

const Api = {
    getDataUser,
    setDataUser,
};

export default Api;