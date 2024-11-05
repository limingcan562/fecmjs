/**
 * @description: Determine if an object is a dom object
 * @param {string} val The judged value
 * @returns {boolean} Is it an dom object
 */
import { getType } from "./getType";

export default function isHtmlObj(val) {
    const JUDGE = 'html';
    const splitValue = getType(val).split(' ')[1];
    return splitValue.includes(JUDGE);
}