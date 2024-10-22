/**
 * @description: Determine if it is an undefined type
 * @param {string} val The judged value
 * @returns {boolean} Is it an undefined
 */
import { getType } from "./getType";

export default function isArr(val) {
    const JUDGE = 'undefined';
    const splitValue = getType(val).split(' ')[1];
    return splitValue.includes(JUDGE);
}