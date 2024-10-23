/**
 * 00:00:00,000
 * @description: Is it in pure English
 * @param {string} textStr - text
 * @return {boolean} Is it in pure English （Contains English special characters and numbers; Excluding English and special English characters）
 */

import hasCN from "./hasCN";
import hasEN from "./hasEN";
import hasCNSpecialChar from "./hasCNSpecialChar";

export default function isAllEN(textStr) {
    return hasEN(textStr) && !hasCN(textStr) && !hasCNSpecialChar(textStr);
}