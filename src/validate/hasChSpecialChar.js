/**
 * 00:00:00,000
 * @description: Does it contain Chinese special characters
 * @param {string} textStr - text
 * @return {boolean} Does it contain Chinese special characters
 */
export default function isAllChinese(textStr) {
    const regex = /[~·！@#￥%……&*（）——+{}【】：；”‘“’|、《，》。？、]/; // 定义特殊字符的正则表达式
    return regex.test(textStr);
}