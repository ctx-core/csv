import { clone } from '@ctx-core/object'
import { header_row__new } from '@ctx-core/table'
import { csv__row_ } from '../csv__row_/index.js'
/** @typedef {import('@ctx-core/table').header_row_T}.header_row_T */
/** @typedef {import('../_types').csv__hd_row___params_T}csv__hd_row___params_T */
/**
 * @param {string}csv
 * @param {csv__hd_row___params_T}[params]
 * @returns {header_row_T}
 * @private
 */
export function csv__header_row_(csv, params = {}) {
	return csv__row_(csv, clone(params, {
		row_: datum_a=>header_row__new(datum_a),
		val_: matched_str=>matched_str
	}))
}
