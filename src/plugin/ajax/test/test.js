// implementation core
import {objectToQueryString, isFormData} from '../util';

// 建立了连接以后，公用的方法
export function Test(_xhr, config) {
    const {
        type,
        headers,
        url,
        data,
        timeout,
    } = config;

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

    // 当 request 被停止时触发
    _xhr.onabort = evt => {
        console.log('onabort ', evt);
    }

    // 出错
    _xhr.onerror = evt => {
        console.log(2222);
        console.log("onerror ", evt);
    };
    // _xhr.onerror = error;

    // 接收到响应数据时触发
    _xhr.onloadstart = evt => {
        console.log('onloadstart ', evt);
    }

    // 请求成功完成时触发
    _xhr.onload = evt => {
        console.log('onload ', evt);
    }

    // 当请求结束时触发, 无论请求成功 ( load) 还是失败 (abort 或 error)
    _xhr.onloadend = evt => {
        console.log('onloadend ', evt);
    }
    
    // 周期函数
    _xhr.onprogress = evt => {
        console.log('onprogress ', evt);
    };
    

    // 在预设时间内没有接收到响应时触发
    _xhr.ontimeout = evt => {
        console.log('ontimeout ', evt);
    };

    // 当 readyState 属性发生变化时
    _xhr.onreadystatechange = evt => {
        console.log('onreadystatechange ', evt);
    };

    // 发送数据
    type === 'get' && _xhr.send();

    type === 'post' && _xhr.send(dataStr);
}