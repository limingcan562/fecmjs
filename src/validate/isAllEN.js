/**
 * 00:00:00,000
 * @description: Is it in pure English
 * @param {string} textStr - text
 * @return {boolean} Is it in pure English （Contains English special characters and numbers; Excluding English and special English characters）
 */

import containCN from "./containCN";
import containEN from "./containEN";
import containCNSpecialChar from "./containCNSpecialChar";

export default function isAllEN(textStr) {
    return containEN(textStr) && !containCN(textStr) && !containCNSpecialChar(textStr);
}