/**
 * @description: Set URL and do not refresh
 * @value {object} Parameter name and value to be set
 */

import isObj from "../object/isObj";
export default function setUrlWithNorefresh(value = {}) {
    if (!isObj(value)) return;

    // 获取当前URL
    const url = new URL(window.location.href);
    // 创建URLSearchParams对象
    const params = new URLSearchParams(url.search);

    // 修改指定参数的值
    Object.keys(value).forEach(key => params.set(key, value[key]));

    // 将修改后的参数设置回URL
    url.search = params.toString();

    // 使用history.replaceState()方法修改URL，而不刷新页面
    history.replaceState(null, '', url.href);
}