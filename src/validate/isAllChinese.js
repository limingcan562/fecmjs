/**
 * 00:00:00,000
 * @description: Is it all in Chinese
 * @param {string} textStr - text
 * @return {boolean} Is it all in Chinese (excluding spaces and special character detection)
 */

import hasChSpecialChar from './hasChSpecialChar';

export default function isAllChinese(textStr) {
    const regex = /^[\u4e00-\u9fa5]+$/; // 匹配所有汉字
    console.log();
    
    return regex.test(textStr) && hasChSpecialChar(textStr) || regex.test(textStr);
}