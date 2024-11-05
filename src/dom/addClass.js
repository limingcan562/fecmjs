// import 
/**
 * @description: Add class names to DOM
 * @param {string | object} selectName class selector || dom
 * @param {string} || {Array} Class name array
 */
import $ from './$';
import isStr from '../object/isStr';
import isHtmlObj from '../object/isHtmlObj';

export default function addClass(selectName, nameList) {
    const dom = isHtmlObj(selectName) ? selectName : $(selectName);

    if (Array.isArray(nameList)) {
        nameList.forEach(n => dom.classList.add(n));
    }
    else if (isStr(nameList)) {
        dom.classList.add(nameList);
    }
}