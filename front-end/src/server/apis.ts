import axios from './axios.ts';

interface like {
    method: string
    data: any
}

export default {
    like(method: string, data: any) {
        return axios('/common/like', {
            method,
            data,
        })
    },

}




