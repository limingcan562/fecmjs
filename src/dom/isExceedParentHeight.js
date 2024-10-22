// import 
/**
 * @description: Does the child element exceed the height of the parent element
 * @param {string} parentSelectName class selector
 * @param {string} childSelectName class selector
 */
import $ from './$';
export default function isExceedParentHeight(parentSelectName, childSelectName) {
    const parentDom = $(parentSelectName);
    const childDom = $(childSelectName);
    
    const parentHeight = parentDom.getBoundingClientRect().height;
    const childHeight = childDom.getBoundingClientRect().height;

    return childHeight > parentHeight;
}