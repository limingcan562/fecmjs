/**
 * 00:00:00,000
 * @description: Does it contain Chinese special characters
 * @param {string} textStr - text
 * @return {boolean} Does it contain Chinese special characters
 */

export default function containCNSpecialChar(textStr) {
    const regex = /[~·！@#￥%……&*（）——+}【】={：；”‘“’|、《，》。？、-]/;
    return regex.test(textStr);
}