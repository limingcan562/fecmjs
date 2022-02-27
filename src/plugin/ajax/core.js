// implementation core
import {objectToQueryString, parseResponse, DEBUG, isFormData} from './util';
import errorData from './data/errorData';

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

    // 打印请求参数
    debug && DEBUG.log(config);

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

    // ! ---------- 绑定相关事件 -----------//
    // 出错
    _xhr.onerror = evt => {
        debug && DEBUG.log(errorData.errorConnect);
        evt._type = errorData.errorConnect;
        error(evt);
    };

    // 请求成功完成时触发
    _xhr.onload = evt => {
        if (_xhr.readyState === 4) {
            let _result = {};
            // 连接成功
            if ((_xhr.status >= 200 && _xhr.status < 300) || _xhr.status === 304) {
                debug && DEBUG.log(errorData.successConnect);
                _result = parseResponse(_xhr.responseText);
                success(_result);
            } 
            // 连接失败
            else if (_xhr.status >= 400) {
                debug && DEBUG.log(errorData.failConnect);
                _result._type = errorData.failConnect;
            
                fail(_result);
            }
            always(_result);
        }
    }

    // 在预设时间内没有接收到响应时触发
    _xhr.ontimeout = evt => {
        debug && DEBUG.log(errorData.timeoutConnect);
        evt._type = errorData.timeoutConnect;
        timeoutFn(evt);
    };

    // 当 readyState 属性发生变化时
    _xhr.onreadystatechange = evt => {
        // 开始调试
        debug && DEBUG.debugAjax(_xhr);
    };

    // 发送数据
    type === 'get' && _xhr.send();

    type === 'post' && _xhr.send(dataStr);
}