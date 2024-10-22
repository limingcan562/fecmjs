/**
 * @description: Determine if it is an Android system
 * @return {boolean}
 */
export default function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}