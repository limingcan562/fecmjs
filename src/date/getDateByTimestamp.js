/**
 * @description: Get date by timestamp
 * @return {string}  current timestamp
 */

import getCurrentTimestamp from './getCurrentTimestamp';

export default function getDateByTimestamp(timestamp, needHMS = false) {
    const _time = timestamp || getCurrentTimestamp();
    const date =  new Date(parseInt(_time));

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const baseDate = `${year}-${month}-${day}`;
    const baseTime = `${hours}:${minutes}:${seconds}`;

    return needHMS ? `${baseDate} ${baseTime}` : baseDate;
} 