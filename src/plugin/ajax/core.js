// implementation core
import {objectToQueryString, parseResponse, DEBUG, isFormData} from './util';
import MSG from './data/index';

// 建立了连接以后，公用的方法
export function commonConnect(config) {
    const {
        type,
        debug,
        debugStep,
        headers,
        url,
        data,
        async,
        timeout,
        success,
        fail,
        timeoutFn,
        always,
        error,
    } = config;

    // 拼接传入的data对象
    let 
    queryStringSeparator = url.indexOf('?') > -1 ? '&' : '?',
    dataStr = objectToQueryString(data),
    requestUrl = url + queryStringSeparator + dataStr;


    // get 请求
    type.toLowerCase() === 'get' && this.open('GET', requestUrl, async);

    // post 请求
    type.toLowerCase() === 'post' && this.open('post', url, async);

    // 设置超时时间
    this.timeout = timeout; // 3000ms超时

    // 如果传进来的数据，是formData类型，则不对数据进行处理，并且不设置请求头，浏览器会自己匹配
    if (isFormData(data)) {
        dataStr = data;
    } 
    else {
        // 如果没有设置header，则给post跟get请求添加默认请求头
        Object.keys(headers).length === 0 && this.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        // 如果设置了他header，则以设置的为准
        Object.keys(headers).length !== 0 && Object.keys(headers).forEach(key => {
            headers[key] && this.setRequestHeader(key, headers[key]);
        });
    }

    // ! ---------- 绑定相关事件 -----------//
    // 出错
    this.onerror = evt => {
        debug && DEBUG.log(MSG.errorConnect);
        evt._type = MSG.errorConnect;
        error(evt);
    };

    // 请求成功完成时触发
    this.onload = evt => {
        if (this.readyState === 4) {
            let response_result = {};
            // 连接成功
            if ((this.status >= 200 && this.status < 300) || this.status === 304) {
                // debug && DEBUG.log(MSG.successConnect);
                response_result = parseResponse(this.responseText);

                // 后台接口不存在时，可能状态码为200，返回404内容（不返回任何内容）
                if (typeof response_result !== 'object') {
                    const _result = { _type: MSG.otherErrors }
                    fail(_result);
                }
                else {
                    response_result._type = MSG.successConnect;
                    success(response_result);
                }
            } 
            // 连接失败
            else if (this.status >= 400) {
                debug && DEBUG.log(MSG.failConnect);
                response_result._type = MSG.failConnect;
            
                fail(response_result);
            }
            always(response_result);
        }
    }

    // 在预设时间内没有接收到响应时触发
    this.ontimeout = evt => {
        debug && DEBUG.log(MSG.timeoutConnect);
        evt._type = MSG.timeoutConnect;
        timeoutFn(evt);
    };

    // 当 readyState 属性发生变化时
    this.onreadystatechange = evt => {
        // 开始调试
        debugStep && DEBUG.debugAjax(this);
    };

    // 发送数据
    type === 'get' && this.send();

    type === 'post' && this.send(dataStr);
}