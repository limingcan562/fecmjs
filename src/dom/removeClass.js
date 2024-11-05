// import 
/**
 * @description: remove class names to DOM
 * @param {string | object} selectName class selector || dom
 * @param {string} || {Array} Class name array
 */
import $ from './$';
import isStr from '../object/isStr';
import isHtmlObj from '../object/isHtmlObj';

export default function removeClass(selectName, nameList) {
    const dom = isHtmlObj(selectName) ? selectName : $(selectName);

    if (Array.isArray(nameList)) {
        nameList.forEach(n => dom.classList.remove(n));
    }
    else if (isStr(nameList)) {
        dom.classList.remove(nameList);
    }
}