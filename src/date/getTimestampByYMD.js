/**
 * @description: Get timestamp by year, month and day
 * @param {string} day, month and year '2024-10-24'
 * @return {string} time stamp
 */
export default function getTimestampFromYMD(YMD) {
    const [year, month, day] = YMD.split('-');
    const date = new Date(Number.parseInt(year), Number.parseInt(month - 1), Number.parseInt(day));
    return date.getTime();
}