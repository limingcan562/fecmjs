/**
 * @description: Determine if the obj value is empty
 * @param {object} obj The judged value
 * @returns {boolean} Is it an function
 */

import isObj from "./isObj";

export default function emptyObj(obj) {
    if (!isObj(obj)) return false;

    return Object.keys(obj).length === 0;
}