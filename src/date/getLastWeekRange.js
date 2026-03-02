/**
 * 获取上个自然周（周一到周日）的起止时间
 * @param {Date|String} baseDate 基准日期，默认是今天
 * @returns {Object} 包含 start (上周一) 和 end (上周日) 的 Date 对象
 */
import getDateByTimestamp from './getDateByTimestamp'

export default function getLastWeekRange(baseDate = new Date()) {
    const date = new Date(baseDate);

    let dayOfWeek = date.getDay();
    if (dayOfWeek === 0) dayOfWeek = 7;

    // 计算上周一
    const lastMonday = new Date(date);
    lastMonday.setDate(date.getDate() - dayOfWeek - 6);

    // 计算上周日
    const lastSunday = new Date(date);
    lastSunday.setDate(date.getDate() - dayOfWeek);

    // 使用辅助函数格式化并返回
    return {
        start: getDateByTimestamp(new Date(lastMonday).getTime()), // 例如: "2026-05-04"
        end: getDateByTimestamp(new Date(lastSunday).getTime())    // 例如: "2026-05-10"
    };
}