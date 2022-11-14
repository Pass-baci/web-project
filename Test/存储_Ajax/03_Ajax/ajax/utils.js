// 序列化数据格式 key=value&key1=value1
const serialize = (param) => {
    const results = [];

    for (const [key, value] of Object.entries(param)) {
        results.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }

    return results.join('&');
};

// 序列化数据格式（JSON）
const serializeJSON = (param) => {
    return JSON.stringify(param);
};

// 生成请求QUEUE
const addURLData = (url, data) => {
    if (!data) return url;

    const mark = url.includes('?') ? '&' : '?';

    return `${mark}${data}`;
};

export {serialize, addURLData, serializeJSON};