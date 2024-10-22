// import 
/**
 * @description: Add class names to DOM
 * @param {string} selectName class selector
 * @param {string} || {Array} Class name array
 */
import $ from './$';
import isStr from '../object/isStr';

export default function addClass(selectName, nameList) {
    const dom = $(selectName);

    if (Array.isArray(nameList)) {
        nameList.forEach(n => dom.classList.add(n));
    }
    else if (isStr(nameList)) {
        dom.classList.add(nameList);
    }
}