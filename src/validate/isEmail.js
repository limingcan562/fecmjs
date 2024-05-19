/**
 * @description: 
 * @param {string} email eamil
 * @return {boolean} Is it an email
 */
export default function (email) {
    //判断是不是邮箱
    var string = email.replace(/\s|&nbsp;/g, '') //先去除用户输入的无效字符
    var reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
    if (reg.test(string)) {
        return true;
    } else {
        return false;
    }
}