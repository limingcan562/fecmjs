/**
 * ---------------------------------
 * Request API（请求相关方法）
 * Be based on @fdaciuk/ajax （基于@fdaciuk/ajax）
 * ---------------------------------
 */

import ajax from '@fdaciuk/ajax';

export const Request = {
    get(url, config) {
        ajax().get(url, config);
    }
}