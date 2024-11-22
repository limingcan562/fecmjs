
/**
 * @description: Determine if there is an emoji in a string.
 * @param {string} str
 * @returns {array}
 */

import hasEmoji from "./hasEmoji";
import { asciiToArray, unicodeToArray } from "./data";


// 把还有emoji表情的字符串转成数据，可以用来限制名字显示
export default function strToArray(str) {
    return hasEmoji(str) ? unicodeToArray(str) : asciiToArray(str);
}