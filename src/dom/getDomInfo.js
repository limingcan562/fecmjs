// import 
/**
 * @description: Get dom node information
 * @param {string | object} selectName class selector || NodeList
 * @returns {Array} List of dom information or individual dom information
 */
import $ from './$';
import isHtmlObj from '../object/isHtmlObj';
import isNodeList from '../object/isNodeList';

export default function getDomInfo(selectName) {
    let dom = {};

    if (isHtmlObj(selectName) || isNodeList(selectName)) {
        dom = selectName;
    } else {
        dom = $(selectName);
    }
    
    if (isNodeList(dom)) {
        const domArr = [...dom];
        return domArr.map(everyDom => everyDom.getBoundingClientRect());
    } else {
        return dom.getBoundingClientRect();
    }
}