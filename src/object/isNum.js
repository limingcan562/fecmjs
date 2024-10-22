/**
 * @description: Determine if it is an number type
 * @param {string} val The judged value
 * @returns {boolean} Is it an number
 */
import { getType } from "./getType";

export default function isNum(val) {
    const JUDGE = 'number';
    const splitValue = getType(val).split(' ')[1];
    return splitValue.includes(JUDGE);
}