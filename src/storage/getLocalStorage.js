/**
 * @description: Get LocalStorage
 * @param {string} key The name of the value to be set
 */

export default function getLocalStorage(key) {
    let value = window.localStorage.getItem(key);
    try {
        value = JSON.parse(value);
    } catch (error) {
        value = window.localStorage.getItem(key);
    }

    return value;
}