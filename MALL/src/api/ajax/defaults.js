import {HTTP_GET,CONTENT_TYPE_FORM_URLENCODED} from './constants.js';

// 声明默认参数
const DEFAULTS = {
    method: HTTP_GET,
    // 请求头携带数据
    params: null,
    // 请求体携带数据
    data: null,
    contentType: CONTENT_TYPE_FORM_URLENCODED,
    // 响应数据格式
    responseType: '',
    // 超时时间
    timeoutTime: 0,
    // 是否允许携带cookie
    withCredentials: false,

    // 方法
    success() {},
    httpCodeError() {},
    error() {},
    abort() {},
    timeout() {},
}

export default DEFAULTS;