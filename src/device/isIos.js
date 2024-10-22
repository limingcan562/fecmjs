/**
 * @description: Determine if it is an iOS system
 * @return {boolean}
 */
export default function isIos() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}