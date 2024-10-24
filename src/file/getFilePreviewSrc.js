/**
 * @description: Format video duration
 * @param {object} file Video duration
 * @return {string} Return the formatted duration "01:01:01"
 */
export default function getFilePreviewSrc(file) {
    const url = window.URL.createObjectURL(file);
    // window.URL.revokeObjectURL(url);
    console.warn('Pay attention to using the revokeObjectURL method to reclaim memory');
    return url;
}