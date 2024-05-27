/**
 * @description: Getting the dom element
 * @param {string} selector class selector
 * @return {boolean} dom element
 */
export default function $(selector) {
    return document.querySelector(selector);
}