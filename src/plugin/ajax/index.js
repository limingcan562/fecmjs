import {commonConnect} from './core';
import {isFormData} from './util';
// import defaultConfig from './config/index';

export const Ajax = {
    // config: defaultConfig,

    config: {
        fieldName: 'ret',
        successCode: 0,
        failCode: -1,
        responseDataName: 'data',

        type: 'post', // 请求类型（默认post）
        debug: 1, // 是否开启调试
        headers: { // 设置请求头
            // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        url: '', // 请求地址
        data: {}, // 请求参数
        async: true, // 是否异步
        timeout: 3000, // 超时时间
        success: () => console.log('interface success'), // 状态码200 成功
        fail: () => console.log('interface fail'), // 状态码非200 失败
        always: () => console.log('interface always'), // 成功失败都会触发的函数
        timeoutFn: () => console.log('interface timeout'), // 超时函数
        error: () => console.log('interface error'), // 出错函数
    },

    // 初始化配置
    init(myConfig) {
        for (const key in myConfig) {
            if (this.config[key]) {
                this.config[key] = myConfig[key]
            }
        }
    },

    // get,post方法集合
    base(config = {}) {
        const requestData = {...this.config, ...config};
        const _xhr = new XMLHttpRequest();
        requestData.type = requestData.type || this.config.type;

        // post 请求，设置请求头
        if (requestData.type.toLowerCase() === 'post' && !isFormData(requestData.data)) {
            requestData.headers = {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }
        commonConnect(_xhr, requestData);
    },

    // 根据后台返回的状态码，重构base接口
    rebuild(
        {
            type,
            debug,
            headers = {},
            url,
            data,
            timeout,
        }
    ) {
        return new Promise((resolve, reject) => {
            this.base({
                type,
                debug,
                headers,
                url,
                data,
                timeout,
                // 覆盖base方法里面的方法
                success: res => {
                    try {
                        // 接口ret === 0 成功
                        if (res[this.config.fieldName].toString() === this.config.successCode.toString()) {
                            resolve(res[this.config.responseDataName]);
                        } 
                        // 接口ret !== 0 失败
                        else {
                            reject(res);
                        }
                    } catch (error) {
                        reject(error);
                    }
                },
                fail: res => reject(res),
                timeoutFn: res => reject(res),
                error: res => reject(res),
            })
        });
    }
};