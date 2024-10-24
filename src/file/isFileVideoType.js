/**
 * @description: Is the file of video type
 * @param {object} file file
 * @return {string} file name
 */
export default function isFileVideoType(file) {
    return file.type.startsWith('video/');
}