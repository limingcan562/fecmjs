/**
 * @description: Getting the dom element
 * @param {string} selectName class selector
 * @return {object} dom element
 */
export default function $(selectName) {
    return document.querySelector(selectName);
}