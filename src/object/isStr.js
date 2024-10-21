/**
 * @description: Determine if it is an string type
 * @param {string} val The judged value
 * @returns {boolean} Is it an string
 */
import { getType } from "./getType";

export default function isStr(val) {
    const JUDGE = 'string';
    const splitValue = getType(val).split(' ')[1];
    return splitValue.includes(JUDGE);
}