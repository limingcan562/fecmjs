/**
 * 获取昨天的日期，并格式化为 yyyy-mm-dd 字符串。
 * 内部使用原生 Date 对象，自动处理跨月、跨年及闰年等边界情况。
 * * @returns {string} 返回格式化后的昨天的日期，例如 "2023-10-25"。
 * * @example
 * // 假设今天是 2023-10-26
 * const yesterday = getYesterdayDate();
 * console.log(yesterday); // 输出: "2023-10-25"
 */

import getDateByTimestamp from './getDateByTimestamp';

export default function getYesterdayDate() {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return getDateByTimestamp(new Date(date).getTime());
}