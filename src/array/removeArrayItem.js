/**
 * @description: Deleting an item in an array
 * @array {array} Array to be manipulated
 * @item {num | string} Items to be deleted
 * @newone {array} Whether a new array needs to be returned
 * @returns {array} Returns the target array
 */

import isNum from "../object/isNum";
import isStr from "../object/isStr";

export const removeArrayItem = (array, item, newone = false) => {
    if (!isNum(array) && !isStr(array)) return array;

    if (!newone) {
        const index = array.indexOf(item);
        index !== -1 && array.splice(index, 1);
        return array;
    }
    return array.filter(i => i !== item);
}