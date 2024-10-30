/**
 * @description: Verify mainland phone number
 * @param {number} phoneNumber - Mobile phone number
 * @return {boolean} Is it a phone number 
 */
export default function isPhoneNum(phoneNumber) {
    var string = phoneNumber.replace(/\s|&nbsp;/g, '')
    if ((/^1(3|4|5|7|8)\d{9}$/.test(string))) {
        return true
    } else {
        return false
    }
}