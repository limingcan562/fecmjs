/**
 * @description: Formatting File Size
 * @param {object} file file
 * @return {string} Returns the size of the formatted file with units
 */
export default function formatFileSize(file = {}) {
    let {size: bytes} = file; 
    let units = ['B', 'KB', 'MB', 'GB', 'TB']
    while (bytes >= 1024 && units.length > 1) {
        bytes /= 1024
        units.shift()
    }
    return Number(bytes.toFixed(2)) + units[0];
}