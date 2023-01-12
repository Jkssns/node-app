import axios from './axios';

interface like {
    method: string
    data: any
}

export default {
    like(method: string, data: any, params: any) {
        return axios('/common/like', {
            method,
            params,
            data,
        })
    },

    getFileUrl(data) {
        return axios('',{
            method: 'get',
            data
        })
    },

    comicFace(data) {
        return axios('/face/comic-face',{
            method: 'post',
            data,
        })
    },
}




