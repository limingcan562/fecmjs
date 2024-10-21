/**
 * @description: Determine if it is an function type
 * @param {string} val The judged value
 * @returns {boolean} Is it an function
 */
import { getType } from "./getType";

export default function isFn(val) {
    const JUDGE = 'function';
    const splitValue = getType(val).split(' ')[1];
    return splitValue.includes(JUDGE);
}