/**
 * 00:00:00,000
 * @description: Verify SRT file format
 * @param {string} textStr - text
 * @return {boolean} Does it conform to the SRT file format
 */
export default function isSrtFormat(textStr) {
    let flag = true;
    // const reg = /^(?:([01]?\d|2[0-3]):)?([0-5]?\d):([0-5]?\d)(?:\,(\d{1,3}))?$/;
    const reg =  /\d{1,2}:\d{1,2}:\d{1,2},\d{1,3}/g;
    // const timeRegex = /\d{2}:\d{2}:\d{2},\d{3}/g;

    // 检验输入的格式
    if (!reg.test(textStr)) {
        // window.$message({message: '时间格式不正确。正确格式：时:分:秒,毫秒', type: 'warning'});
        flag = false;
    }
    return flag;
}