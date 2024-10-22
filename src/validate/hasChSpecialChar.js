/**
 * 00:00:00,000
 * @description: Does it contain Chinese special characters
 * @param {string} textStr - text
 * @return {boolean} Does it contain Chinese special characters
 */

import SPECIALCHAR from "./specialChar";

export default function hasChSpecialChar(textStr) {
    const regex = new RegExp(SPECIALCHAR.zh); // 定义特殊字符的正则表达式
    return regex.test(textStr);
}