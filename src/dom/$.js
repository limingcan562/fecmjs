/**
 * @description: Getting the dom element
 * @param {string} selectName class selector
 * @return {object | array} dom element
 */
export default function $(selectName) {
    const domArr = document.querySelectorAll(selectName);
    return domArr.length <= 1 ? domArr[0] : domArr;
}