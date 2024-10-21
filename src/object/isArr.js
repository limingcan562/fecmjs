/**
 * @description: Determine if it is an array type
 * @param {string} val The judged value
 * @returns {boolean} Is it an array
 */
import { getType } from "./getType";

export default function isArr(val) {
    const JUDGE = 'array';
    const splitValue = getType(val).split(' ')[1];
    return splitValue.includes(JUDGE);
}