/**
 * @description: Get URL parameters
 * @key {string} A parameter name
 * @url {url} The link to be obtained
 * @return {string | object} Returns an object consisting of a value or all values of url.
 */
export default function getUrlValue(key, url = window.location.href){
	// \w+ 表示匹配至少一个(数字、字母及下划线), [\u4e00-\u9fa5]+ 表示匹配至少一个中文字符
	let pattern = /(\w+|[\u4e00-\u9fa5]+)=(\w+|[\u4e00-\u9fa5]+)/ig;
	let result = {};
	url.replace(pattern, ($, $1, $2)=>{
		result[$1] = $2;
	});

    if (key) return result[key];
    if (!key) return result;
}