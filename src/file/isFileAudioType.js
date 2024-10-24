/**
 * @description: Is the file of audio type
 * @param {object} file file
 * @return {string} file name
 */
export default function isFileAudioType(file) {
    return file.type.startsWith('audio/');
}