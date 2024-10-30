/**
 * @description: Is the inspection content in SRT format
 * @param {object} file file
 * @return {string}
 */
export default function isContentSrtFormat(textStr) {
    // const reg = /^(?:([01]?\d|2[0-3]):)?([0-5]?\d):([0-5]?\d)(?:\,(\d{1,3}))?$/;
    const reg =  /\d{1,2}:\d{1,2}:\d{1,2},\d{1,3}/g;
    // const timeRegex = /\d{2}:\d{2}:\d{2},\d{3}/g;

    // 检验输入的格式
    return reg.test(textStr)
}