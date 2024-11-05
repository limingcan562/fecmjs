// import 
/**
 * @description: Determine whether the element appears in the visible area
 * @param {string | object} dom class selector || dom
 * @returns {boolean} 
 */
import $ from './$';
import isHtmlObj from '../object/isHtmlObj';

export default function isShowOnVisualArea(dom) {
    const DOM = isHtmlObj(dom) ? dom : $(dom);
    
    // viewPortHeight 兼容所有浏览器写法
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const offsetTop = DOM.offsetTop;
    const scrollTop = document.documentElement.scrollTop;
    const top = offsetTop - scrollTop;

    return top < viewPortHeight;
}