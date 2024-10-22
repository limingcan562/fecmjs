// import 
/**
 * @description: Modify DOM style
 * @param {string} selectName class selector
 * @param {string} || {Array} Class name array
 */
import $ from './$';
import isObj from '../object/isObj';
import isStr from '../object/isStr';
export default function setStyle(selectName, style) {
    const dom = $(selectName);

    if (isObj(style)) {
        Object.entries(style).forEach(([key,value]) => dom.style[key] = value);
    } else if (isStr(style)) {
        dom.style = style;
    }
}