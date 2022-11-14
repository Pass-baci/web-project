import {HTTP_GET, CONTENT_TYPE_FORM_URLENCODED, CONTENT_TYPE_JSON} from './constants.js';
import DEFAULTS from './defaults.js';
import {serialize, addURLData, serializeJSON} from './utils.js';

// 构建Ajax类
class Ajax {
    constructor(url, options) {
        this.url = url;
        this.options = Object.assign({}, DEFAULTS, options);
        this.init();
    }

    // 初始化
    init() {
        const xhr = new XMLHttpRequest();
        this.xhr = xhr;
        this.bindEvents();

        xhr.open(this.options.method, this.url + this.addParam(), true);

        this,this.setContentType();
        this.setResponseType();
        this.setWithCredentials();
        this.setTimeOut();

        this.sendData();
    }

    // 绑定事件
    bindEvents() {
        const xhr = this.xhr;
        const {success, httpCodeError, error, abort, timeout} = this.options;
        xhr.addEventListener('load', () => {
            if (this.ok()) {
                success(xhr.response, xhr);
            } else {
                httpCodeError(xhr.status, xhr);
            }
        }, false)

        xhr.addEventListener('error', () => {
            error(xhr);
        }, false)

        xhr.addEventListener('abort', () => {
            abort(xhr);
        }, false)

        xhr.addEventListener('timeout', () => {
            timeout(xhr);
        }, false)
    }

    // 检测状态码
    ok() {
        const xhr = this.xhr;
        return (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304
    }

    // 添加请求参数
    addParam() {
        const {params} = this.options;

        if (!params) return '';

        return addURLData(this.url, serialize(params));
    }

    // 设置ContentType
    setContentType() {
        this.xhr.contentType = this.options.contentType.toLowerCase();
    }

    // 设置ResponseType
    setResponseType() {
        this.xhr.responseType = this.options.responseType;
    }

    // 设置是否携带cookie
    setWithCredentials() {
        this.xhr.withCredentials = this.options.withCredentials;
    }

    // 设置请求超时时间
    setTimeOut() {
        this.xhr.timeout = this.options.timeoutTime;
    }

    // 发送请求数据
    sendData() {
        const xhr = this.xhr;
        const data = this.options.data;

        if (!this.isSendData()) {
            return xhr.send(null);
        }

        let resultData = data;

        if (this.isFormData()) {
            resultData = data;
        }

        if (this.isFormUrlEncoded()) {
            resultData = serialize(data);
        }

        if (this.isJSON()) {
            resultData = serializeJSON(data);
        }

        xhr.send(resultData);
    }

    // 检测是否发送请求数据
    isSendData() {
        const {data, method} = this.options;
    
        if (!data || method.toUpperCase() === HTTP_GET) return false;

        return true;
    }

    // 检测是否发送FormData数据格式
    isFormData() {
        return this.options.data instanceof FormData;
    }

    // 检测是否发送FormUrlEncoded数据格式
    isFormUrlEncoded() {
        return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_FORM_URLENCODED);
    }

    // 检测是否发送JSON数据格式
    isJSON() {
        return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_JSON);
    }

    // 获取XHR对象
    getXHR() {
        return this.xhr;
    }
}

export default Ajax;