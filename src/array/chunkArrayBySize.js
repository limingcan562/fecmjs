/**
 * @description: Group arrays by size
 * @array {array} Array to be manipulated
 * @size {num} size
 * @returns {array} Returns an array grouped by size.
 */

export const chunkArrayBySize = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}