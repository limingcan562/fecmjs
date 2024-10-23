/**
 * 00:00:00,000
 * @description: Is there Chinese available
 * @param {string} textStr - text
 * @return {boolean} Is there Chinese available
 */

export default function hasCN(textStr) {
    const regex = /[\u4e00-\u9fa5]/; // 匹配所有汉字
    return regex.test(textStr);
}