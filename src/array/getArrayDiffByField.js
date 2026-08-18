/**
 * @description: Find items that exist in arrayA but not in arrayB by field or getter.
 * @arrayA {array} Source array
 * @arrayB {array} Target array
 * @fieldA {string | function} Field name or getter of arrayA
 * @fieldB {string | function} Field name or getter of arrayB
 * @returns {array} Returns items that exist in arrayA but not in arrayB.
 */

function getItemValue (item, field) {
    if (typeof field === 'function') return field(item);
    return item && item[field];
}

export default function getArrayDiffByField (arrayA, arrayB, fieldA, fieldB = fieldA) {
    if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) return [];

    const valueSetB = new Set();
    arrayB.forEach(item => {
        const value = getItemValue(item, fieldB);
        if (value !== undefined && value !== null) {
            valueSetB.add(value);
        }
    });

    return arrayA.filter(item => {
        const value = getItemValue(item, fieldA);
        return value === undefined || value === null || !valueSetB.has(value);
    });
}
