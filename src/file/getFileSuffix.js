/**
 * @description: Retrieve the file suffix
 * @param {object} file file
 * @return {string} file type
 */
export default function getFileSuffix(file) {
    const {name} = file;
    return name.substring(name.lastIndexOf('.') + 1).toLowerCase();
}