import axios from './axios.ts';

export default {
    login(data: any) {
        return axios('/login', {
            method: 'post',
            data: data,
        })
    },

    register(data: any) {
        return axios('/register', {
            method: 'post',
            data,
        })
    },

    userList(data: any) {
        return axios('/user/list', {
            method: 'get',
            data
        })
    },

    addUser(data: any) {
        return axios('/user/add', {
            method: 'get',
            data: data,
        })
    },

    delUser(data: any) {
        return axios('/user/delete', {
            method: 'get',
            data: data,
        })
    },

    updateUser(data: any) {
        return axios('/user/update', {
            method: 'get',
            data: data,
        })
    },

    addMsg(data: any) {
        return axios('/msg/add', {
            method: 'get',
            data: data,
        })
    },
}




