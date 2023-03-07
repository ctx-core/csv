const number_only_regex = /^\s*-?(\d|\.)+\s*$/
const date_only_regex = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/
/**
 * @param {string}matched_str
 * @param {boolean}[is_quoted]
 * @returns {import('./index.d.ts').csv__val_T}
 * @See https://www.bennadel.com/blog/1504-ask-ben-parsing-csv-strings-with-javascript-exec-regular-expression-command.htm
 * @private
 */
export function csv__val_(matched_str, is_quoted) {
	if (matched_str === '' && !is_quoted) {
		return null
	}
	if (matched_str === 'true') {
		return true
	}
	if (matched_str === 'false') {
		return false
	}
	if (matched_str === 'null') {
		return null
	}
	if (matched_str === 'undefined') {
		return undefined
	}
	const parsed_num =
		number_only_regex.test(matched_str)
		? parseFloat(matched_str)
		: NaN
	if (!isNaN(parsed_num)) {
		return parsed_num
	}
	const millis =
		date_only_regex.test(matched_str)
		? Date.parse(matched_str)
		: NaN
	if (!isNaN(millis)) {
		return new Date(millis)
	}
	return matched_str
}
