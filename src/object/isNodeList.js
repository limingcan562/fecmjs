/**
 * @description: Whether this is a list of dom nodes
 * @param {string} val The judged value
 * @returns {boolean} NodeList
 */
import { getType } from "./getType";

export default function isNodeList(val) {
    const JUDGE = 'nodelist';
    const splitValue = getType(val).split(' ')[1];
    return splitValue.includes(JUDGE);
}