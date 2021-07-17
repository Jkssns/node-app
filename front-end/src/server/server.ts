import axios from './axios.ts';

export default {
    login(data) {
        return axios('/login', {
            method: 'post',
            data: data
        })
    },
}