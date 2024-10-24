/**
 * @description: Get timestamp by year, month and day
 * @param {string} time
 * @return {string} time stamp
 */
export default function getTimestamp(...time) {
    return time ? new Date(...time).getTime() : new Date().getTime();
}