/**
 * 00:00:00,000
 * @description: Does it contain english special characters
 * @param {string} textStr - text
 * @return {boolean} Does it contain english special characters
 */

import SPECIALCHAR from "./specialChar";

export default function hasEnSpecialChar(textStr) {
    const regex = new RegExp(SPECIALCHAR.en); // 定义特殊字符的正则表达式
    return regex.test(textStr);
}