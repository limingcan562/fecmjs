/**
 * 00:00:00,000
 * @description: Does it contain english special characters
 * @param {string} textStr - text
 * @return {boolean} Does it contain english special characters
 */

export default function containENSpecialChar(textStr) {
    const regex = /[!@#$%^&*()+=_}|:-;"<>{.,?]/; // 定义特殊字符的正则表达式
    return regex.test(textStr);
}