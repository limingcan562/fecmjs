// import 
/**
 * @description: remove class names to DOM
 * @param {string} selectName class selector
 * @param {string} || {Array} Class name array
 */
import $ from './$';
import isStr from '../object/isStr';

export default function removeClass(selectName, nameList) {
    const dom = $(selectName);

    if (Array.isArray(nameList)) {
        nameList.forEach(n => dom.classList.remove(n));
    }
    else if (isStr(nameList)) {
        dom.classList.remove(nameList);
    }
}