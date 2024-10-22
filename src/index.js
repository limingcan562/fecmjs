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


// object
import isArr from './object/isArr';
import isStr from './object/isStr';
import isFn from './object/isFn';
import isObj from './object/isObj';
import isNull from './object/isNull';


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

    isArr,
    isObj,
    isStr,
    isFn,
    isNull,
}