// import 
/**
 * @description: Modify DOM style
 * @param {string | object} selectName class selector || dom
 * @param {string} || {Array} Class name array
 */
import $ from './$';
import isObj from '../object/isObj';
import isStr from '../object/isStr';
import isHtmlObj from '../object/isHtmlObj';


export default function setStyle(selectName, style) {
    const dom = isHtmlObj(selectName) ? selectName : $(selectName);

    if (isObj(style)) {
        Object.entries(style).forEach(([key,value]) => dom.style[key] = value);
    } else if (isStr(style)) {
        dom.style = style;
    }
}