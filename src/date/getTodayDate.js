/**
 * @description: Get today's date
 * @param {String} symbolStr String concatenator
 * @return {string}  current date
 */


export default function getTodayDate(symbolStr = '-') {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    
    return `${year}${symbolStr}${month}${symbolStr}${day}`;
} 