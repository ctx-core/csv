/**
 * @param {string}matched_str
 * @param {boolean}[is_quoted]
 * @returns {import('./index.d.ts').csv__val_T}
 * @See https://www.bennadel.com/blog/1504-ask-ben-parsing-csv-strings-with-javascript-exec-regular-expression-command.htm
 * @private
 */
export function csv_val__hydrate(
	matched_str,
	is_quoted
) {
	switch (true) {
		case matched_str === '' && !is_quoted:
		case matched_str === 'null':
			return null
		case matched_str === 'undefined':
			return undefined
		case matched_str === 'true':
		case matched_str === 'false':
			return matched_str === 'true'
		case isFinite(/** @type {any} */matched_str):
			return parseFloat(matched_str)
		default:
			const millis = Date.parse(matched_str)
			if (!isNaN(millis)) {
				return new Date(millis)
			}
			return matched_str
	}
}
export {
	csv_val__hydrate as csv__val_,
}
