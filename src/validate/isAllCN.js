/**
 * 00:00:00,000
 * @description: Is it in pure Chinese
 * @param {string} textStr - text
 * @return {boolean} Is it in pure Chinese （Contains Chinese special characters and numbers; Excluding English and special English characters）
 */

import hasEN from "./hasEN";
import hasCN from "./hasCN";
import hasENSpecialChar from "./hasENSpecialChar";

export default function isAllCN(textStr) {
    return hasCN(textStr) && !hasEN(textStr) && !hasENSpecialChar(textStr);
}