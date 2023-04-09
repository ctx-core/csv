import { csv__parse, csv__parse_o_ } from '../csv__parse/index.js'
/** @typedef {import('@ctx-core/table').data_row_T}.data_row_T */
/** @typedef {import('@ctx-core/table').header_row_T}.header_row_T */
/** @typedef {import('../_types').csv__parse_o_T}.csv__parse_o_T */
/** @typedef {import('../_types').csv__row__parse_o_T}.csv__row__parse_o_T */
/** @typedef {import('../_types').csv__row__row__T}.csv__row__row__T */
/**
 * @param {string}csv
 * @param {csv__row__parse_o_T}csv__parse_o
 * @returns {header_row_T|data_row_T}
 * @private
 */
export function csv__row_(
	csv,
	csv__parse_o
) {
	const { row_ } = csv__parse_o.data
	for (const csv__datum_a of csv__parse(
		csv,
		/** @type {csv__parse_o_T} */csv__parse_o
	)) {
		return row_(csv__datum_a)
	}
}
/**
 * @param {csv__row__row__T}row_
 * @returns {csv__parse_o_T}
 * @private
 */
export function csv__row__parse_o_(row_) {
	const csv__parse_o = csv__parse_o_()
	csv__parse_o.data.row_ = row_
	return csv__parse_o
}
