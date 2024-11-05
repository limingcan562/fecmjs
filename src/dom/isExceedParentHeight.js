// import 
/**
 * @description: Does the child element exceed the height of the parent element
 * @param {string | object} parent parent element || Parent element selector
 * @param {string | object} child parent element || child element selector
 */
import $ from './$';
import isHtmlObj from '../object/isHtmlObj';

export default function isExceedParentHeight(parent, child) {
    const parentDom = isHtmlObj(parent) ? parent : $(parent);
    const childDom = isHtmlObj(child) ? child : $(child);

    const parentHeight = parentDom.getBoundingClientRect().height;
    const childHeight = childDom.getBoundingClientRect().height;

    return childHeight > parentHeight;
}