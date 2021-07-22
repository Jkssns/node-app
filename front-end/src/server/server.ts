import axios from './axios.ts';

interface AxiosParams {
    url: string;
    method: string;
    timeout: number;
    data: any;
    params: any;
    cancelToken: string;
    headers: any;
    responseType: string;
}

export default {
    login(data: AxiosParams) {
        return axios('/login', {
            method: 'post',
            data: data
        })
    },
}