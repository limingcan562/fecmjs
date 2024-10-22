// validate
import isEmail from './validate/isEmail';
import isPhone from './validate/isPhone';
import isIntlPhone from './validate/isIntlPhone';

// dom
import $ from './dom/$';
import removeClass from './dom/removeClass';
import addClass from './dom/addClass';
import getClass from './dom/getClass';
import setStyle from './dom/setStyle';
import isShowOnVisualArea from './dom/isShowOnVisualArea';
import isExceedParentHeight from './dom/isExceedParentHeight';


// object
import isArr from './object/isArr';
import isStr from './object/isStr';
import isFn from './object/isFn';
import isObj from './object/isObj';
import isNull from './object/isNull';
import isNum from './object/isNum';
import isUndefined from './object/isUndefined';

// storage
import setLocalStorage from './storage/setLocalStorage';
import getLocalStorage from './storage/getLocalStorage';
import clearLocalStorage from './storage/clearLocalStorage';
import removeLocalStorage from './storage/removeLocalStorage';



// export default {
//     isEmail,
//     isPhone,
//     isIntlPhone,
//     $
// }

export {
    isEmail,
    isPhone,
    isIntlPhone,

    $,
    removeClass,
    addClass,
    getClass,
    setStyle,
    isShowOnVisualArea,
    isExceedParentHeight,

    isArr,
    isObj,
    isStr,
    isFn,
    isNull,
    isNum,
    isUndefined,

    setLocalStorage,
    getLocalStorage,
    clearLocalStorage,
    removeLocalStorage
}