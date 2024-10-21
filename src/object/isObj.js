/**
 * @description: Determine if it is an object type
 * @param {string} val The judged value
 * @returns {boolean} Is it an object
 */
import { getType } from "./getType";

export default function isObj(val) {
    const JUDGE = 'object';
    const splitValue = getType(val).split(' ')[1];
    return splitValue.includes(JUDGE);
}