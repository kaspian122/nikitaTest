import { http} from "./apiConfig";

const urlData = '/data';

const getDataUser = () => http.get(`${urlData}`);
const setDataUser = (data, username) => http.post(`${urlData}`);

const Api = {
    getDataUser,
    setDataUser,

};

export default Api;