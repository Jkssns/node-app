import axios from 'axios';

let token = '';
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.defaults.baseURL = '/api'

axios.interceptors.request.use(function(config) {
    return config;
}, function(error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response) {
    return response.data;
}, function(error) {
    return Promise.reject(error);
});

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

export default function(url: string, {
    method = 'get',
    timeout = 10000,
    data = {},
    cancelToken = '',
    headers = {
        'Content-Type': 'application/json'
    },
    responseType = 'json'
}) {
    const config = {
        method: method,
        timeout: timeout,
        url: url,
        data: data,
        params: data,
        canelToken: cancelToken, // 关闭请求
        headers: headers,
        responseType: responseType
    };
    return axios(config);
}

