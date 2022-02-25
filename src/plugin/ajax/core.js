// implementation core
import {objectToQueryString, parseResponse, debugAjax, isFormData, logRequestData} from './util';

// 建立了连接以后，公用的方法
export function commonConnect(_xhr, config) {
    const {
        type,
        debug,
        headers,
        url,
        data,
        timeout,
        success,
        fail,
        timeoutFn,
        always,
        error,
    } = config;

    debug && logRequestData(config);

    // 拼接传入的data对象
    let 
    queryStringSeparator = url.indexOf('?') > -1 ? '&' : '?',
    dataStr = objectToQueryString(data),
    requestUrl = url + queryStringSeparator + dataStr,
    async = true;

    // get 请求
    type.toLowerCase() === 'get' && _xhr.open('GET', requestUrl, async);

    // post 请求
    type.toLowerCase() === 'post' && _xhr.open('post', url, async);

    // 设置超时时间
    _xhr.timeout = timeout; // 3000ms超时

    // 如果传进来的数据，是formData类型，则不对数据进行处理，并且不设置请求头，浏览器会自己匹配
    if (isFormData(data)) {
        dataStr = data;
    } 
    else {
        // 设置请求头
        Object.keys(headers).forEach(key => {
            headers[key] && _xhr.setRequestHeader(key, headers[key]);
        });
    }

    // 出错
    _xhr.onerror = error;


    // 请求成功完成时触发
    _xhr.onload = evt => {
        if (_xhr.readyState === 4) {
            // 接口连接成功
            if ((_xhr.status >= 200 && _xhr.status < 300) || _xhr.status === 304) {
                success(parseResponse(_xhr.responseText));
            } 
            // 接口连接失败
            else if (_xhr.status >= 400) {
                fail(parseResponse(_xhr.responseText));
            }
            always(parseResponse(_xhr.responseText));
        }
    }

    // 在预设时间内没有接收到响应时触发
    _xhr.ontimeout = timeoutFn;

    // 当 readyState 属性发生变化时
    _xhr.onreadystatechange = evt => {
        // 开始调试
        debug && debugAjax(_xhr);
    };

    // 发送数据
    type === 'get' && _xhr.send();

    type === 'post' && _xhr.send(dataStr);
}