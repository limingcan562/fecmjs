/**
 * ---------------------------------
 * Request API（请求相关方法）
 * Be based on @fdaciuk/ajax （基于@fdaciuk/ajax）
 * ---------------------------------
 */

let _plugin = null;
let _config = {};

export const Request = {
    registerPlugin(
        plugin = null, 
        config = {
            headers: {
                'content-type': 'application/json',
                // 'x-access-token': '123@abc'
            },
            baseUrl: '',
        }
    ) {
        _plugin = plugin;
        _config = config;
    },

    // get requst
    get(url, data) {
        _plugin()
        .get(url, data)
        .then((response, xhr) => {
            console.log(response, xhr);
        })
        .catch((responseError, xhrObject) => {
            console.log(responseError, xhrObject, 2);
        })
        .always((response, xhrObject) => {
            console.log(response, xhrObject, 3);
        });
    }
}