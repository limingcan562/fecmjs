/**
 * @description: Get the type of value
 * @param {string} val The judged value
 * @returns {string} return type
 */
export function getType(val) {
    return Object.prototype.toString.call(val).toLowerCase();
}