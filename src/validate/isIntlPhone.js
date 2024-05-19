export default function isIntlPhone(phoneNumber) {
    // 简单的正则表达式来判断是否符合E.164格式
    const regex = /^\+(?:\d{1,3})(?:\d{10,11})$/;
    return regex.test(phoneNumber);
}