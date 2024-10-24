/**
 * @description: Determine if it is an Date type
 * @param {string} val The judged value
 * @returns {boolean} Is it an Date
 */
import { getType } from "./getType";

export default function isFn(val) {
    const JUDGE = 'date';
    const splitValue = getType(val).split(' ')[1];
    return splitValue.includes(JUDGE);
}