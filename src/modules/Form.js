/**
 * ---------------------------------
 * Form Validation（表单验证）
 * ---------------------------------
 */
export const Form = {
    // 验证身份证
    checkID(ID){
        const myreg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/;
        if (!myreg.test(ID)) {  
            return false;  
        } 
        else {  
            return true;  
        }  
    },

    // 验证邮箱
    checkEmail(email) {
        const reg = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
        let flag = false;
        if(!reg.test(email)){ //正则验证不通过，格式不对
            flag = false;
        } else {
            flag = true;
        }
        return flag;
    },

    // 验证手机号码
    isPhoneNum (phone) {
        const myreg = /^(13[0-9]|14[57]|15[0-3,5-9]|16[6]|18[0-9]|17[0-3,5-8]|18[0-9]|19[89])[0-9]{8}$/;  
        if (!myreg.test(phone)) {  
            return false;  
        } 
        else {  
            return true;  
        }  
    },
    // 随机生成范围随机整数
    rangeRandom (min = 0, max = 0) {
        try {
            if (min > max) {
                throw 'The last number must be greater than the first value';
            }
            else if (isNaN(min) || isNaN(max)) {
                throw 'value is not a number';
            }
            else if (!Number.isInteger(min) || !Number.isInteger(max)) {
                throw 'value must be a integer';
            }
            else {
                let
                _min = Number(min),
                _max = Number(max),
                Range = _max - _min,
                Rand = Math.random();
                return _min + Math.round(Rand * Range);
            }
        }
        catch(err){
            console.error(err);
        }
    },
    
    // 删除字符串里面的表情
    removeEmoji(content = ''){
        return content.replace(/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g, "");
    },
    
    // 判断是不是纯中文（不包括空格，特殊字符）
    allChinese(val = ''){
        const reg = /[^\u4e00-\u9fa5]/;  
        if(reg.test(val)){
            return false;
        }else{
            return true;
        }
    },
    
    // 判断是不是纯英文（不包括空格，特殊字符）
    allEnglish(val = ''){
        const flag = /^[a-zA-Z]+$/.test(val);
        if (flag) {
            return true;
        } else {
            return false; 
        }
    },
    
    // 是否包含特殊字符
    hasSpecialCharacters(str = '') {      
        const flag = new RegExp("[`·~!@#$%^&*()-_=+|{}':;',\\[\\].<>《》/?~！@#￥……&*（）――——|{}【】‘；：”“'。，、？ ]");
        // 判断 even 是否包含特殊字符
        if(flag.test(str)) {
            return true;
        }else{
            return false;
        }   
    },
    
    // 去掉字符串里面的空格
    removeSpaceSrt(str = '') {
        str = str.replace(/\s*/g,"");
        return str;
    }
}