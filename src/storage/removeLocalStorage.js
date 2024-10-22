/**
 * @description: Remove LocalStorage
 * @param {string} key The name of the value to be set
 */

import isArr from "../object/isArr";
import isStr from "../object/isStr";

export default function setLocalStorage(key) {
    if (isArr(key)) {
        key.forEach(KEY => window.localStorage.removeItem(KEY));
    }
    else if (isStr(key)) {
        window.localStorage.removeItem(key);
    }
}