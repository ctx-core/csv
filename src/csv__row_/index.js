import { csv__regex_ } from '../csv__regex_/index.js'
/** @typedef {import('@ctx-core/table').data_row_T}.data_row_T */
/** @typedef {import('@ctx-core/table').header_row_T}.header_row_T */
/** @typedef {import('./index.d.ts').csv__row___params_T}.csv__row___params_T */
/**
 * @param {string}csv
 * @param {csv__row___params_T}params
 * @returns {header_row_T|data_row_T}
 * @private
 */
export function csv__row_(csv, params) {
	const { row_, val_, delimiter = ',' } = params
	const { csv__regex = csv__regex_(delimiter) } = params
	let match_a = null
	let csv__datum_a = null
	while (match_a = csv__regex.exec(csv)) {
		const delimiter_match = match_a[1]
		if (delimiter_match.length && (delimiter_match != delimiter)) {
			if (csv__datum_a) break
			csv__datum_a = []
		} else if (!csv__datum_a) {
			csv__datum_a = []
		}
		const is_quoted = !!match_a[2]
		const str_match =
			is_quoted
			? match_a[2].replace(new RegExp('""', 'g'), '"')
			: match_a[3]
		const val = val_(str_match, is_quoted)
		csv__datum_a.push(val)
	}
	return row_(csv__datum_a)
}
