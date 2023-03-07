import { csv__val_ } from '../csv__val_/index.js'
import { csv__regex_ } from '../csv__regex_/index.js'
import { data_row_ } from '@ctx-core/table'
/** @typedef {import('@ctx-core/table').column_a_T}column_a_T */
/** @typedef {import('@ctx-core/table').data_row_T}Row */
/** @typedef {import('@ctx-core/table').table_T}table_T */
/** @typedef {import('../csv__regex_').csv__regex_T}csv__regex_T */
/** @typedef {import('./index.d.ts').csv_o__params_T}csv_o__params_T */
/**
 * @param {string}csv
 * @param {csv_o__params_T}params
 * @returns {table_T}
 * @private
 */
export function csv__table_(csv, params) {
	const {
		delimiter = ',',
		has_header_row,
		on_data_row,
	} = params
	const regex = csv__regex_(delimiter)
	/** @type {column_a_T} */
	let column_a
	/** @type {Row} */
	const data_row_a = []
	/** @type {csv__regex_T} */
	let match_a = null
	let header_a__is_current = false
	/** @type {unknown[]} */
	let current_datum_a
	while (match_a = regex.exec(csv)) {
		const matched_delimiter = match_a[1]
		if (matched_delimiter.length && (matched_delimiter != delimiter)) {
			if (!column_a && has_header_row) {
				header_a__is_current = true
				column_a = []
			} else {
				header_a__is_current = false
				// on_data_row should be called with a complete data_row
				if (on_data_row && current_datum_a) {
					on_data_row(data_row_(current_datum_a))
				}
				current_datum_a = []
				if (!on_data_row) {
					data_row_a.push(data_row_(current_datum_a))
				}
			}
		}
		const is_quoted = !!match_a[2]
		const matched_str =
			is_quoted
			? match_a[2].replace(new RegExp('""', 'g'), '"')
			: match_a[3]
		if (header_a__is_current) {
			column_a.push(matched_str)
		} else {
			const csv__matched_val =
				csv__val_(matched_str, is_quoted)
			current_datum_a.push(csv__matched_val)
		}
	}
	if (on_data_row) {
		// last row
		if (current_datum_a) {
			on_data_row(data_row_(current_datum_a))
		}
		return {
			column_a,
			data_row_a: null
		}
	}
	/** @type {table_T} */
	return {
		column_a,
		data_row_a
	}
}
