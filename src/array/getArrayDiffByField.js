/**
 * @description: Find items that exist in arrayA but not in arrayB by field or getter.
 * @arrayA {array} Source array
 * @arrayB {array} Target array
 * @fieldA {string | function} Field name or getter of arrayA
 * @fieldB {string | function} Field name or getter of arrayB
 * @returns {array} Returns items that exist in arrayA but not in arrayB.
 */

import getItemValueByField from './getItemValueByField';

export default function getArrayDiffByField (arrayA, arrayB, fieldA, fieldB = fieldA) {
    if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) return [];

    const valueSetB = new Set();
    arrayB.forEach(item => {
        const value = getItemValueByField(item, fieldB);
        if (value !== undefined && value !== null) {
            valueSetB.add(value);
        }
    });

    return arrayA.filter(item => {
        const value = getItemValueByField(item, fieldA);
        return value === undefined || value === null || !valueSetB.has(value);
    });
}
