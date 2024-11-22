
/**
 * @description: Remove spaces from the string
 * @param {string} str character string
 * @returns a string without spaces
 */

export default function removeStrSpace(str){
    return str.replace(/\s+/g, '');
};