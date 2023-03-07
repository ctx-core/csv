import { line_iterator_ } from '@ctx-core/string'
import { column_M_row_idx__new, table_ } from '@ctx-core/table'
import { csv__data_row_ } from '../csv__data_row_/index.js'
import { csv__header_row_ } from '../csv__header_row_/index.js'
import { csv__regex_ } from '../csv__regex_/index.js'
/**
 * @param {import('@ctx-core/string').line_iterator__readable_reader_T}readable_stream_or_reader
 * @param {import('./index.d.ts').reader__csv__table__on_data_row_T}on_data_row
 * @returns {Promise<import('@ctx-core/table').table_T>}
 * @private
 */
export async function reader__csv__table_(
	readable_stream_or_reader,
	on_data_row,
) {
	/** @type {import('../csv__data_row_').header_row_T} */
	let header_row
	/** @type {import('@ctx-core/table').data_row_T[]} */
	const data_row_a = []
	/** @type {import('@ctx-core/table').table_T} */
	let table
	const is_string = typeof readable_stream_or_reader === 'string'
	try {
		/** @type {import('@ctx-core/table').column_M_row_idx_T} */
		let column_M_row_idx
		const csv__regex = csv__regex_()
		/** @type {import('../csv__data_row_').csv__data_row___params_T} */
		let params
		for await (const csv of line_iterator_(readable_stream_or_reader)) {
			if (!column_M_row_idx) {
				header_row = csv__header_row_(csv)
				table = table_(data_row_a, header_row)
				column_M_row_idx = column_M_row_idx__new(header_row)
				params = {
					column_M_row_idx,
					csv__regex,
				}
				continue
			}
			const csv__data_row = csv__data_row_(csv, params)
			on_data_row(
				csv__data_row,
				data_row_a,
				csv,
				params,
				table,)
		}
		return table
	} catch (err) {
		if (is_string) {
			console.error({ path_or_readable: readable_stream_or_reader })
		}
		throw err
	}
}
