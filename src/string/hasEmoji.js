
/**
 * @description:  Determine if there is an emoji in a string.
 * @param {string} str
 */

import { reHasUnicode } from './data';

export default function hasEmoji(str) {
    return reHasUnicode.test(str);
}