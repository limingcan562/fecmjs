/**
 * 根据px转换成rem单位
 * @param {number} px - 像素值
 * @param {number} rootValue - 基准
 * @param {string} unit - 返回值是否需要单位
 * @returns {string | number} 返回转换后的单位
 */
export default function getRemByPx(px, rootValue = 1920, unit = true) {
    const decimal = 2;
    const BASE = 10;
    return unit
        ? (px * BASE / rootValue).toFixed(decimal) + 'rem'
        : (px * BASE / rootValue).toFixed(decimal) 
}