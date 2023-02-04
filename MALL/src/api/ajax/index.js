import Ajax from "./ajax.js";
import { HTTP_GET,HTTP_POST, Response_Type_JSON } from "./constants.js";

const ajax = (url, options) => {
    // return new Ajax(url, options).getXHR();
    let xhr;
    const p = new Promise((resolve, reject) => {
        xhr = new Ajax(url, {
            ...options,
            ...{
                success(response){
                    resolve(response);
                },
                httpCodeError(err) {
                    reject(err);
                },
                error(xhr) {reject('error');},
                abort(xhr) {reject('abort error');},
                timeout(xhr) {reject('timeout error');},
            }
        }).getXHR();
    })

    p.xhr = xhr;

    return p;
}

const get = (url, options) => {
    return ajax(url, {...options, method: HTTP_GET});
}

const getJSON = (url, options) => {
    return ajax(url, {...options, method: HTTP_GET, responseType: Response_Type_JSON});
}

const post = (url, options) => {
    return ajax(url, {...options, method: HTTP_POST});
}

export {ajax, get, getJSON, post}