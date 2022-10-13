import {commonConnect} from './core';
import {DEBUG} from './util';
import defaultConfig from './config/index';
import MSG from './data/index';

let 
xhr = null,
initConfig = null;

export default class Ajax {
    constructor(config) {
        initConfig = {...defaultConfig, ...config};
    };

    // 停止请求
    abort() {
        xhr && xhr.abort();
    }

    // get,post方法集合
    base(config = {}) {
        let requestData = {...initConfig, ...config};
        xhr = new XMLHttpRequest();
        commonConnect.call(xhr, requestData);
    }

    // 根据后台返回的状态码，重构base接口
    rebuild(config = {}) {
        const 
        useful = {
            data: config.data,
            url: config.url,
            type: config.type ? config.type : initConfig.type,
            headers: config.headers ? config.headers : initConfig.headers,
            headers: config.timeout ? config.timeout : initConfig.timeout,
        },
        requestData = {...initConfig, ...useful};

        return new Promise((resolve, reject) => {
            this.base({
                ...requestData,
                // 覆盖base方法里面的方法
                success: res => {
                    try {
                        // 接口ret === 0 成功
                        if (res[requestData.fieldName].toString() === requestData.successCode.toString()) {
                            requestData.debug && DEBUG.log(MSG.interfaceSuccess);
                            const data = res[requestData.responseDataName];
                            res._type = MSG.interfaceSuccess;
                            resolve(data);
                        } 
                        // 接口ret !== 0 失败
                        else {
                            requestData.debug && DEBUG.log(MSG.interfaceFail);
                            res._type = MSG.interfaceFail;
                            reject(res);
                        }
                    } catch (error) {
                        error._type = MSG.otherErrors;
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