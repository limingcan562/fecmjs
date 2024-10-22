// import 
/**
 * @description: Get the class name of DOM
 * @param {string} selectName class selector
 * @returns {Array} Class name array
 */
import $ from './$';
export default function addClass(selectName) {
    const dom = $(selectName);
    const totalClassNameStr = dom.classList.value;
    return totalClassNameStr.split(' ');
}