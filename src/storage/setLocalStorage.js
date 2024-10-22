/**
 * @description: Set LocalStorage
 * @param {string} key The name of the value to be set
 * @param {string} val The value to be set
 */

import isObj from "../object/isObj";

export default function setLocalStorage(key, val) {
    let finalVal = '';
    if (isObj(val)) finalVal = JSON.stringify(val);
    window.localStorage.setItem(key, finalVal);
}