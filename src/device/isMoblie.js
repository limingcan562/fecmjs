/**
 * @description: Is it a mobile device
 * @return {boolean}
 */
export default function isMoblie() {
    return /Mobi|Android/i.test(navigator.userAgent);
}