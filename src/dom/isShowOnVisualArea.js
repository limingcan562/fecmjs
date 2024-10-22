// import 
/**
 * @description: Determine whether the element appears in the visible area
 * @param {string} selectName class selector
 * @returns {boolean} 
 */
import $ from './$';
export default function isShowOnVisualArea(selectName) {
    const dom = $(selectName);
    
    // viewPortHeight 兼容所有浏览器写法
    const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    const offsetTop = dom.offsetTop;
    const scrollTop = document.documentElement.scrollTop;
    const top = offsetTop - scrollTop;

    return top < viewPortHeight;
}