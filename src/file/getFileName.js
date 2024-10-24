/**
 * @description: Get file name
 * @param {object} file file
 * @return {string} file name
 */
export default function getFileName(file) {
    const {name} = file;
    return name.substring(0, name.lastIndexOf('.'));
}