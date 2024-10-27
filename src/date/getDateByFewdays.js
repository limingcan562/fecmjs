/**
 * @description: Get specific dates a few days before or a few days after
 * @param {string} time, month and year '2024-10-24'
 * @param {string} daysago, a few days
 * @return {string} time '2024-10-24'
 */

export default function getDateByFewdays(time, daysago) {
    const date = new Date(time);
    const intDaysage = +daysago;
    const dateAgo = date.getDate() + intDaysage;
    date.setDate(dateAgo);

    const newYear = date.getFullYear();
    const newMonth = String(date.getMonth() + 1).padStart(2, '0');
    const newDay = String(date.getDate()).padStart(2, '0');
    const MARK = '-';

    return `${newYear}${MARK}${newMonth}${MARK}${newDay}`;
}