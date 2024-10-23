/**
 * 00:00:00,000
 * @description: Is there English available
 * @param {string} textStr - text
 * @return {boolean} Is there English available
 */

export default function hasEN(textStr) {
    const regex = /[a-zA-Z]/;
    return regex.test(textStr);
}