// validate
import isEmail from './validate/isEmail';
import isPhoneNum from './validate/isPhoneNum';
import isIntlPhone from './validate/isIntlPhone';
import containCNSpecialChar from './validate/containCNSpecialChar';
import containENSpecialChar from './validate/containENSpecialChar';
import containCN from './validate/containCN';
import containEN from './validate/containEN';
import isAllCN from './validate/isAllCN';
import isAllEN from './validate/isAllEN';


// dom
import $ from './dom/$';
import removeClass from './dom/removeClass';
import addClass from './dom/addClass';
import getClass from './dom/getClass';
import setStyle from './dom/setStyle';
import isShowOnVisualArea from './dom/isShowOnVisualArea';
import isExceedParentHeight from './dom/isExceedParentHeight';
import setPageNoScroll from './dom/setPageNoScroll';
import restorePageScroll from './dom/restorePageScroll';


// object
import isArr from './object/isArr';
import isStr from './object/isStr';
import isFn from './object/isFn';
import isObj from './object/isObj';
import isNull from './object/isNull';
import isNum from './object/isNum';
import isUndefined from './object/isUndefined';
import isDate from './object/isDate';
import emptyObj from './object/emptyObj';

// storage
import setLocalStorage from './storage/setLocalStorage';
import getLocalStorage from './storage/getLocalStorage';
import clearLocalStorage from './storage/clearLocalStorage';
import removeLocalStorage from './storage/removeLocalStorage';


// device
import isAndroid from './device/isAndroid';
import isIos from './device/isIos';
import isMoblie from './device/isMoblie';
import isPc from './device/isPc';
import isIphone from './device/isIphone';
import isWechat from './device/isWechat';
import isIpad from './device/isIpad';

// file
import getFilePreviewSrc from './file/getFilePreviewSrc';
import getFileName from './file/getFileName';
import getFileSuffix from './file/getFileSuffix';
import isFilePicType from './file/isFilePicType';
import isFileAudioType from './file/isFileAudioType';
import isFileVideoType from './file/isFileVideoType';
import isContentSrtFormat from './file/isContentSrtFormat';


// format
import formatFileSize from './format/formatFileSize';
import formatVideoDuration from './format/formatVideoDuration';

// date
import getTimestamp from './date/getTimestamp';
import getCurrentTimestamp from './date/getCurrentTimestamp';
import getDateByFewdays from './date/getDateByFewdays';
import getDateByTimestamp from './date/getDateByTimestamp';


// url
import getUrlValue from './url/getUrlValue';
import setUrlWithNorefresh from './url/setUrlWithNorefresh';


// export default {
//     isEmail,
//     isPhoneNum,
//     isIntlPhone,
//     $
// }

export {
    isEmail,
    isPhoneNum,
    isIntlPhone,
    containCNSpecialChar,
    containENSpecialChar,
    containCN,
    containEN,
    isAllCN,
    isAllEN,
    

    $,
    removeClass,
    addClass,
    getClass,
    setStyle,
    isShowOnVisualArea,
    isExceedParentHeight,
    setPageNoScroll,
    restorePageScroll,

    isArr,
    isObj,
    isStr,
    isFn,
    isNull,
    isNum,
    isUndefined,
    isDate,
    emptyObj,

    setLocalStorage,
    getLocalStorage,
    clearLocalStorage,
    removeLocalStorage,

    isAndroid,
    isIos,
    isMoblie,
    isPc,
    isIphone,
    isWechat,
    isIpad,

    formatFileSize,
    formatVideoDuration,

    getFilePreviewSrc,
    getFileName,
    getFileSuffix,
    isFilePicType,
    isFileAudioType,
    isFileVideoType,
    isContentSrtFormat,

    getTimestamp,
    getCurrentTimestamp,
    getDateByFewdays,
    getDateByTimestamp,

    getUrlValue,
    setUrlWithNorefresh
}