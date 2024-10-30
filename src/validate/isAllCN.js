/**
 * 00:00:00,000
 * @description: Is it in pure Chinese
 * @param {string} textStr - text
 * @return {boolean} Is it in pure Chinese （Contains Chinese special characters and numbers; Excluding English and special English characters）
 */

import containEN from "./containEN";
import containCN from "./containCN";
import containENSpecialChar from "./containENSpecialChar";

export default function isAllCN(textStr) {
    return containCN(textStr) && !containEN(textStr) && !containENSpecialChar(textStr);
}