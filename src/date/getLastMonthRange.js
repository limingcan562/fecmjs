/**
 * 获取上个月的起止日期（yyyy-mm-dd 格式）
 * @param {Date|String} baseDate 基准日期，默认是今天
 * @returns {Object} { start: 'yyyy-mm-01', end: 'yyyy-mm-dd' }
 */
import getDateByTimestamp from './getDateByTimestamp';

export default  function getLastMonthRange(baseDate = new Date()) {
    const now = new Date(baseDate);
    const year = now.getFullYear();
    const month = now.getMonth(); // 注意：getMonth() 返回 0-11，0 代表 1 月

    // 1. 获取上个月的第一天
    // 逻辑：年份不变，月份减 1，日期设为 1
    const firstDay = new Date(year, month - 1, 1);

    // 2. 获取上个月的最后一天
    // 逻辑：将本月的日期设为 0，JS 会自动返回上个月的最后一天
    const lastDay = new Date(year, month, 0);

    // 辅助函数：格式化日期为 yyyy-mm-dd
    const format = (d) => {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        return `${y}-${m}-${dd}`;
    };

    return {
        start: getDateByTimestamp(new Date(firstDay).getTime()),
        end: getDateByTimestamp(new Date(lastDay).getTime()),
    };
}