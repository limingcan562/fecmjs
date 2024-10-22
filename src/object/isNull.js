/**
 * @description: Determine if it is an null type
 * @param {string} val The judged value
 * @returns {boolean} Is it an null
 */
import { getType } from "./getType";

export default function isStr(val) {
    const JUDGE = 'null';
    const splitValue = getType(val).split(' ')[1];
    return splitValue.includes(JUDGE);
}