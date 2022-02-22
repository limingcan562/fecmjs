/**
 * ---------------------------------
 * Request API（请求相关方法）
 * Be based on @fdaciuk/ajax （基于@fdaciuk/ajax）
 * ---------------------------------
 */

let _ajax = null;

// 查看是否有注册插件
const checkRegisterPlugin = () => (!_ajax && console.error('Please register the @fdaciuk/ajax plug-in first'));

export const Request = {
    Ajax: null,

    // register method
    registerPlugin(plugin = null) {
        _ajax = plugin;
    },

    // get requst
    getConnectInfo(
        {
            baseUrl = '',
            headers = {
                'content-type': 'application/json'
            },
            method = "GET", 
            url = '',
            data = {}
        } = {}
    ) {
        checkRegisterPlugin();
        return new Promise((resolve, reject) => {
            this.Ajax = _ajax({
                baseUrl,
                headers,
                method,
                url,
                data
            })
            // 成功回调
            .then((response, xhr) => {
                resolve(response, xhr);
            })
            .catch((responseError, xhrObject) => {
                reject(responseError, xhrObject);
            })
            .always((response, xhrObject) => {
                console.log('always' + response, xhrObject);
            });
        })
    }
}