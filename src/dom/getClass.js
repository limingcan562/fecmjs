// import 
/**
 * @description: Get the class name of DOM
 * @param {string | object} selectName class selector || dom
 * @returns {Array} Class name array
 */
import $ from './$';
import isHtmlObj from '../object/isHtmlObj';

export default function addClass(selectName) {
    const dom = isHtmlObj(selectName) ? selectName : $(selectName);

    const totalClassNameStr = dom.classList.value;
    return totalClassNameStr.split(' ');
}