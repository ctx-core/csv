import { line__parse } from '@ctx-core/string'
import { column_M_row_idx__new, data_row_, header_row__new } from '@ctx-core/table'
import { csv__parse, csv__parse_o_ } from '../csv__parse/index.js'
import { is_readable_stream_or_reader_ } from '../is_readable_stream_or_reader_/index.js'
import { csv__val_ } from '../csv__val_/index.js'
/** @typedef {import('@ctx-core/string').readable_stream_or_reader_T}readable_stream_or_reader_T */
/** @typedef {import('@ctx-core/table').column_M_row_idx_T}column_M_row_idx_T */
/** @typedef {import('@ctx-core/table').data_row_T}data_row_T */
/** @typedef {import('@ctx-core/table').header_row_T}header_row_T */
/** @typedef {import('@ctx-core/table').table_T}table_T */
/** @typedef {import('../_types').csv__on_data_row_T}csv__on_data_row_T */
/** @typedef {import('./index.d.ts').csv__table__parse_o_T}csv__table__parse_o_T */
/**
 * @param {csv__on_data_row_T|string|readable_stream_or_reader_T}on_data_row_or_csv_or_readable_stream_or_reader
 * @param {string|readable_stream_or_reader_T|boolean}csv_or_readable_stream_or_reader_or_has_csv_header
 * @param {boolean}[has_csv_header]
 * @returns {table_T|void|AsyncIterable<[data_row_T, header_row_T]>|Promise<void>}
 * @private
 */
export function csv__table_(
	on_data_row_or_csv_or_readable_stream_or_reader,
	csv_or_readable_stream_or_reader_or_has_csv_header,
	has_csv_header
) {
	/** @type {csv__on_data_row_T} */
	const on_data_row =
		typeof on_data_row_or_csv_or_readable_stream_or_reader === 'function'
		? on_data_row_or_csv_or_readable_stream_or_reader
		: null
	/** @type {string} */
	const csv =
		on_data_row
		? typeof csv_or_readable_stream_or_reader_or_has_csv_header === 'string'
			? csv_or_readable_stream_or_reader_or_has_csv_header
			: null
		: typeof on_data_row_or_csv_or_readable_stream_or_reader === 'string'
			? on_data_row_or_csv_or_readable_stream_or_reader
			: null
	/** @type {readable_stream_or_reader_T} */
	const readable_stream_or_reader =
		on_data_row
		? is_readable_stream_or_reader_(csv_or_readable_stream_or_reader_or_has_csv_header)
			? csv_or_readable_stream_or_reader_or_has_csv_header
			: null
		: is_readable_stream_or_reader_(on_data_row_or_csv_or_readable_stream_or_reader)
			? on_data_row_or_csv_or_readable_stream_or_reader
			: null
	if (csv == null && readable_stream_or_reader == null) {
		throw new Error(
			'csv__table_: required argument: '
			+ 'csv string or ReadableStream or ReadableStreamDefaultReader or ReadableStreamBYOBReader')
	}
	/** @type {boolean} */
	if (!on_data_row) has_csv_header = csv_or_readable_stream_or_reader_or_has_csv_header
	if (has_csv_header == null) has_csv_header = true
	/** @type {header_row_T} */
	let header_row
	/** @type {data_row_T[]} */
	const data_row_a = []
	/** @type {column_M_row_idx_T} */
	let column_M_row_idx
	const csv__parse_o = csv__table__parse_o_(has_csv_header)
	if (csv) {
		return csv__string__process()
	} else {
		return (
			on_data_row
			? csv__readable_stream_or_reader__on_data_row__process()
			: csv__readable_stream_or_reader__async_iterator__process())
	}
	function csv__string__process() {
		csv__parse(val_a=>{
			if (!header_row) {
				header_row = header_row__new(has_csv_header ? val_a : val_a.length)
				column_M_row_idx = column_M_row_idx__new(header_row)
				if (has_csv_header) return
			}
			const data_row = data_row_(val_a, column_M_row_idx)
			if (on_data_row) {
				on_data_row(data_row, header_row)
			} else {
				data_row_a.push(data_row)
			}
		}, csv, csv__parse_o)
		if (!on_data_row) {
			/** @type {table_T} */
			return {
				header_row,
				data_row_a
			}
		}
	}
	async function csv__readable_stream_or_reader__on_data_row__process() {
		await line__parse(csv=>{
			// skip empty line
			if (!csv.trim()) return
			csv__parse(val_a=>{
				if (!header_row) {
					header_row = header_row__new(has_csv_header ? val_a : val_a.length)
					column_M_row_idx = column_M_row_idx__new(header_row)
					if (has_csv_header) return
				}
				const data_row = data_row_(val_a, column_M_row_idx)
				on_data_row(data_row, header_row)
			}, csv, csv__parse_o)
		}, readable_stream_or_reader, { include_line_separator: true })
	}
	async function* csv__readable_stream_or_reader__async_iterator__process() {
		for await (const csv of line__parse(
			readable_stream_or_reader,
			{ include_line_separator: true }
		)) {
			// skip empty line
			if (!csv.trim()) continue
			for (const val_a of csv__parse(csv, csv__parse_o)) {
				if (!header_row) {
					header_row = header_row__new(has_csv_header ? val_a : val_a.length)
					column_M_row_idx = column_M_row_idx__new(header_row)
					if (has_csv_header) continue
				}
				const data_row = data_row_(val_a, column_M_row_idx)
				yield [data_row, header_row]
			}
		}
	}
}
/**
 * @param {boolean}has_csv_header
 * @returns {csv__table__parse_o_T}
 * @private
 */
export function csv__table__parse_o_(has_csv_header) {
	const csv__parse_o = csv__parse_o_()
	csv__parse_o.val_ = csv__val_
	csv__parse_o.data.has_csv_header = has_csv_header
	return csv__parse_o
}
