/**
 * @description: Determine if it is an iPad system
 * @return {boolean}
 */
export default function isIpad() {
    return /iPad/i.test(navigator.userAgent);
}