import { clone } from '@ctx-core/object'
import { data_row_ } from '@ctx-core/table'
import { csv__row_ } from '../csv__row_/index.js'
import { csv__val_ } from '../csv__val_/index.js'
/** @typedef {import('@ctx-core/table').data_row_T}data_row_T */
/** @typedef {import('./index.d.ts').csv__data_row___params_T}csv__data_row___params_T */
/**
 * @param {string}csv
 * @param {csv__data_row___params_T}params
 * @returns {data_row_T}
 * @private
 */
export function csv__data_row_(csv, params) {
	const { column_M_row_idx, } = params
	return csv__row_(csv, clone(params, {
		row_: datum_a=>data_row_(datum_a, column_M_row_idx),
		val_: match_str=>csv__val_(match_str)
	}))
}
