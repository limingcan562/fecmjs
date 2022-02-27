
// 拼接data对象里面的数据
export function objectToQueryString (data) {
    return isObject(data) ? getQueryString(data) : data
}

export function getQueryString (obj, prefix) {
    return Object.keys(obj).map(function (key) {
        if (obj.hasOwnProperty(key) && undefined !== obj[key]) {
            var val = obj[key]
            key = prefix ? prefix + '[' + key + ']' : key
            return val !== null && typeof val === 'object' ? getQueryString(val, key) : encode(key) + '=' + encode(val)
        }
    })
    .filter(Boolean)
    .join('&')
}

export function isObject (data) {
    return Object.prototype.toString.call(data) === '[object Object]'
}

// 是不是formData类型
export function isFormData(data) {
    return data.constructor.name.toLowerCase() === 'formdata'
}

export function encode (value) {
    return encodeURIComponent(value)
}

// 处理返回的数据
export function parseResponse (responseText) {
    let result;
    try {
        result = JSON.parse(responseText);
    } catch (e) {
        result = responseText;
    }
    return result
}

export const DEBUG = {
    baseLog() {
        console.log('---------debug ------');
    },

    log(text) {
        this.baseLog();
        console.log(text);
    },

    // debug模式下，调试接口
    debugAjax(xhr) {
        switch (xhr.readyState) {
            case 0:
                this.log(`${xhr.readyState}.代理被创建，但尚未调用 open() 方法`);
                break;
            case 1:
                this.log(`${xhr.readyState}.open() 方法已经被调用`);
                break;
            case 2:
                this.log(`${xhr.readyState}.send() 方法已经被调用，并且头部和状态已经可获得`);
                break;
            case 3:
                this.log(`${xhr.readyState}.下载中； responseText 属性已经包含部分数据`);
                break;
            case 4:
                this.log(`${xhr.readyState}.下载操作已完成`);
                break;
        }
    }
}