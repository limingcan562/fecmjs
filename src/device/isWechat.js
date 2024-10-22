/**
 * @description: Determine if it is a WeChat environment
 * @return {boolean}
 */
export default function isWechat() {
    return /MicroMessenger/i.test(navigator.userAgent);
}