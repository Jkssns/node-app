import axios from 'axios';

let token = '';
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.defaults.baseURL = 'https://umbom699.dongtaiyuming.net'

axios.interceptors.request.use(function(config: any) {
    return config;
}, function(error: any) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response: any) {
    return response.data;
}, function(error: any) {
    return Promise.reject(error);
});

export default function(url: string, {
    method = 'get',
    timeout = 100000,
    data = {},
    params = {},
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
        params: params,
        canelToken: cancelToken, // 关闭请求
        headers: headers,
        responseType: responseType
    };
    return axios(config as any);
}

