/**
 * @description: Determine if it is an Apple phone
 * @return {boolean}
 */
export default function isWechat() {
    return /iPhone/i.test(navigator.userAgent);
}