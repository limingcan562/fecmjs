/**
 * @description: Is the file of image type
 * @param {object} file file
 * @return {string} file name
 */
export default function isFilePicType(file) {
    return file.type.startsWith('image/');


}