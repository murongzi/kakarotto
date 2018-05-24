import axios from 'axios';
import { ENGINE_METHOD_NONE } from 'constants';

export const ApiService = (params) => {
    return axios.get(params.url)
}

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});