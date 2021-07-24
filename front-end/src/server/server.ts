import axios from './axios.ts';

export default {
    login(data: any) {
        return axios('/login', {
            method: 'post',
            data: data,
        })
    },

    userList(data: any) {
        console.log("data::: ", data);
        return axios('/user', {
            method: 'get',
            data: data,
        })
    },
}