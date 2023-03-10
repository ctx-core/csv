import { data_row_ } from '@ctx-core/table'
import { csv__parse, csv__parse_o_ } from '../csv__parse/index.js'
import { csv__val_ } from '../csv__val_/index.js'
/** @typedef {import('@ctx-core/table').column_M_row_idx_T}column_M_row_idx_T */
/** @typedef {import('@ctx-core/table').data_row_T}data_row_T */
/** @typedef {import('./index.d.ts').csv__data_row___parse_o_T}csv__data_row___parse_o_T */
/**
 * @param {string}csv
 * @param {csv__data_row___parse_o_T}csv__parse_o
 * @returns {data_row_T}
 * @private
 */
export function csv__data_row_(csv, csv__parse_o) {
	const { column_M_row_idx, } = csv__parse_o.data
	const revert__val_ = csv__parse_o.val_
	try {
		csv__parse_o.val_ = match_str=>csv__val_(match_str)
		for (const val_a of csv__parse(csv, csv__parse_o)) {
			return data_row_(val_a, column_M_row_idx)
		}
	} finally {
		csv__parse_o.val_ = revert__val_
	}
}
/**
 * @param {column_M_row_idx_T}column_M_row_idx
 * @returns {csv__data_row___parse_o_T}
 * @private
 */
export function csv__data_row__parse_o_(column_M_row_idx) {
  const csv__parse_o = csv__parse_o_()
	csv__parse_o.data.column_M_row_idx = column_M_row_idx
	return csv__parse_o
}
