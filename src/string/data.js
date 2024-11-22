export const rsAstralRange = '\\ud800-\\udfff',
rsZWJ = '\\u200d',
rsVarRange = '\\ufe0e\\ufe0f',
rsComboMarksRange = '\\u0300-\\u036f',
reComboHalfMarksRange = '\\ufe20-\\ufe2f',
rsComboSymbolsRange = '\\u20d0-\\u20ff',
rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

export const reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');

export const rsFitz = '\\ud83c[\\udffb-\\udfff]',
rsOptVar = '[' + rsVarRange + ']?',
rsCombo = '[' + rsComboRange + ']',
rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
reOptMod = rsModifier + '?',
rsAstral = '[' + rsAstralRange + ']',
rsNonAstral = '[^' + rsAstralRange + ']',
rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
rsSeq = rsOptVar + reOptMod + rsOptJoin,
rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

export const reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
export function asciiToArray(string) {
    // 调用split方法
    return string.split('')
}


// ! 把含有表情包的字符串转成数组（lMC燦🍁 ===> 长度为4）
export function unicodeToArray(val) {
    return val.match(reUnicode) || [];
}