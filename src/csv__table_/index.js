import { line__parse } from '@ctx-core/string'
import { data_row_, header_M_col_idx__new, header_row__new } from '@ctx-core/table'
import { csv__parse, csv__parse_o_ } from '../csv__parse/index.js'
import { csv_val__hydrate } from '../csv_val__hydrate/index.js'
import { is_readable_stream_OR_reader_ } from '../is_readable_stream_OR_reader_/index.js'
/** @typedef {import('@ctx-core/string').readable_stream_OR_reader_T}readable_stream_OR_reader_T */
/** @typedef {import('@ctx-core/table').header_M_col_idx_T}header_M_col_idx_T */
/** @typedef {import('@ctx-core/table').data_row_T}data_row_T */
/** @typedef {import('@ctx-core/table').header_row_T}header_row_T */
/** @typedef {import('@ctx-core/table').hydrated_val__T}hydrated_val__T */
/** @typedef {import('@ctx-core/table').table_T}table_T */
/** @typedef {import('../_types').csv__on_data_row_T}csv__on_data_row_T */
/** @typedef {import('./index.d.ts').csv__table__parse_o_T}csv__table__parse_o_T */
/**
 * @param {csv__on_data_row_T|string|readable_stream_OR_reader_T}on_data_row_OR_csv_OR_readable_stream_OR_reader
 * @param {string|readable_stream_OR_reader_T|boolean}csv_OR_readable_stream_OR_reader_OR_has_csv_header
 * @param {boolean|hydrated_val__T}[has_csv_header_OR_val__hydrate]
 * @param {hydrated_val__T}[val__hydrate]
 * @returns {table_T|void|AsyncIterable<[data_row_T, header_row_T]>|Promise<void>}
 * @private
 */
export function csv__table_(
	on_data_row_OR_csv_OR_readable_stream_OR_reader,
	csv_OR_readable_stream_OR_reader_OR_has_csv_header,
	has_csv_header_OR_val__hydrate,
	val__hydrate
) {
	/** @type {csv__on_data_row_T} */
	const on_data_row =
		typeof on_data_row_OR_csv_OR_readable_stream_OR_reader === 'function'
		? on_data_row_OR_csv_OR_readable_stream_OR_reader
		: null
	/** @type {string} */
	const csv =
		on_data_row
		? typeof csv_OR_readable_stream_OR_reader_OR_has_csv_header === 'string'
			? csv_OR_readable_stream_OR_reader_OR_has_csv_header
			: null
		: typeof on_data_row_OR_csv_OR_readable_stream_OR_reader === 'string'
			? on_data_row_OR_csv_OR_readable_stream_OR_reader
			: null
	/** @type {readable_stream_OR_reader_T} */
	const readable_stream_OR_reader =
		on_data_row
		? is_readable_stream_OR_reader_(csv_OR_readable_stream_OR_reader_OR_has_csv_header)
			? csv_OR_readable_stream_OR_reader_OR_has_csv_header
			: null
		: is_readable_stream_OR_reader_(on_data_row_OR_csv_OR_readable_stream_OR_reader)
			? on_data_row_OR_csv_OR_readable_stream_OR_reader
			: null
	if (csv == null && readable_stream_OR_reader == null) {
		throw new Error(
			'csv__table_: required argument: '
			+ 'csv string or ReadableStream or ReadableStreamDefaultReader or ReadableStreamBYOBReader')
	}
	/** @type {boolean} */
	const has_csv_header =
		on_data_row
		? has_csv_header_OR_val__hydrate ?? true
		: csv_OR_readable_stream_OR_reader_OR_has_csv_header ?? true
	if (!on_data_row) val__hydrate = has_csv_header_OR_val__hydrate
	if (val__hydrate == null) {
		val__hydrate = val=>val
	}
	/** @type {header_row_T} */
	let header_row
	/** @type {data_row_T[]} */
	const data_row_a = []
	/** @type {header_M_col_idx_T} */
	let header_M_col_idx
	if (csv) {
		return csv__string__process()
	} else {
		return (
			on_data_row
			? csv__readable_stream_OR_reader__on_data_row__process()
			: csv__readable_stream_OR_reader__async_iterator__process())
	}
	function csv__string__process() {
		const csv__parse_o = csv__table__parse_o_(has_csv_header)
		csv__parse(val_a=>{
			if (!header_row) {
				header_row =
					header_row__new(
						has_csv_header
						? val_a
						: val_a.length)
				header_M_col_idx = header_M_col_idx__new(header_row)
				if (has_csv_header) return
			}
			const data_row =
				data_row_(
					val_a.map((val, col_idx)=>
						val__hydrate(
							val,
							header_row
							? header_row[col_idx]
							: col_idx,
							val_a,
							col_idx)),
					/** @type {any} */header_M_col_idx)
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
	async function csv__readable_stream_OR_reader__on_data_row__process() {
		const csv__parse_o = csv__table__parse_o_(has_csv_header)
		await line__parse(csv=>{
			// skip empty line
			if (!csv.trim()) return
			csv__parse(val_a=>{
				if (!header_row) {
					header_row =
						header_row__new(
							has_csv_header
							? val_a
							: val_a.length)
					header_M_col_idx = header_M_col_idx__new(header_row)
					if (has_csv_header) return
				}
				const data_row =
					data_row_(
						val_a.map((val, col_idx)=>
							val__hydrate(
								val,
								header_row
								? header_row[col_idx]
								: col_idx,
								val_a,
								col_idx)),
						/** @type {any} */header_M_col_idx)
				on_data_row(data_row, header_row)
			}, csv, csv__parse_o)
		}, readable_stream_OR_reader, { include_line_separator: true })
	}
	async function* csv__readable_stream_OR_reader__async_iterator__process() {
		const csv__parse_o = csv__table__parse_o_(has_csv_header)
		for await (const csv of line__parse(
			readable_stream_OR_reader,
			{ include_line_separator: true }
		)) {
			// skip empty line
			if (!csv.trim()) continue
			for (const val_a of csv__parse(csv, csv__parse_o)) {
				if (!header_row) {
					header_row =
						header_row__new(
							has_csv_header
							? val_a
							: val_a.length)
					header_M_col_idx = header_M_col_idx__new(header_row)
					if (has_csv_header) continue
				}
				const data_row =
					data_row_(
						val_a.map((val, col_idx)=>
							val__hydrate(
								val,
								header_row
								? header_row[col_idx]
								: col_idx,
								val_a,
								col_idx)),
						/** @type {any} */header_M_col_idx)
				yield [data_row, header_row]
			}
		}
	}
}
/**
 * @param {boolean}has_csv_header
 * @param {hydrated_val__T}[val__hydrate]
 * @returns {csv__table__parse_o_T}
 * @private
 */
export function csv__table__parse_o_(
	has_csv_header,
	val__hydrate
) {
	const csv__parse_o = csv__parse_o_()
	csv__parse_o.val__hydrate =
		val__hydrate
		|| (
			val=>
				csv_val__hydrate(val))
	csv__parse_o.data.has_csv_header = has_csv_header
	return csv__parse_o
}
