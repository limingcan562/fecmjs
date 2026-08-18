/**
 * @description: Get item value by field name or getter.
 * @item {object} Target item
 * @field {string | function} Field name or getter
 * @returns {*} Returns item value.
 */

export default function getItemValueByField (item, field) {
    if (typeof field === 'function') return field(item);
    return item && item[field];
}
