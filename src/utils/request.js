import axios from 'axios'
import { apiServer } from './../constants/apiServer';

const requestApi = (method, url, payload) => {
    return axios({
        method: method,
        url: apiServer + url,
        data: payload
    })
}

export default requestApi