/**
 * @param {string}val
 * @param {string}[_header]
 * @param {string[]}[_row_tuple]
 * @param {number}[_col_idx]
 * @returns {import('../_types').csv__val_T}
 * @See https://www.bennadel.com/blog/1504-ask-ben-parsing-csv-strings-with-javascript-exec-regular-expression-command.htm
 * @private
 */
export function csv_val__hydrate(
	val,
	_header,
	_row_tuple,
	_col_idx
) {
	switch (true) {
		case val === '':
		case val === 'null':
			return null
		case val === 'undefined':
			return undefined
		case val === 'true':
		case val === 'false':
			return val === 'true'
		case isFinite(/** @type {any} */val):
			return parseFloat(val)
		default:
			return val
	}
}
export {
	csv_val__hydrate as csv__val_,
}
