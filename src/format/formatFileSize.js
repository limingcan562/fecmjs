/**
 * @description: Format video duration
 * @param {string} totalSeconds Video duration
 * @return {string} Return the formatted duration "01:01:01"
 */
export default function formatFileSize(bytes) {
    let units = ['B', 'KB', 'MB', 'GB', 'TB']
    while (bytes >= 1024 && units.length > 1) {
        bytes /= 1024
        units.shift()
    }
    return Number(bytes.toFixed(2)) + units[0];
}