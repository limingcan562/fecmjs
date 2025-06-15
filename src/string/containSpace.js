/**
 * @description: Determine whether the string contains spaces
 * @param {string} textStr - text
 * @return {boolean} 
 */

export default function containSpace(textStr) {
    return new RegExp(/\s+/g).test(textStr);
}