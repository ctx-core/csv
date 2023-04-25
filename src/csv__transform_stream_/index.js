import { line__transform_stream_ } from '@ctx-core/string'
import { data_row_, header_M_col_idx__new, header_row__new } from '@ctx-core/table'
import { csv__parse } from '../csv__parse/index.js'
import { csv__table__parse_o_ } from '../csv__table_/index.js'
/** @typedef {import('../_types').csv__transform_stream___params_T}csv__transform_stream___params_T */
/** @typedef {import('@ctx-core/table').data_row_T}data_row_T */
/** @typedef {import('@ctx-core/table').header_row_T}header_row_T */
/**
 * @param {csv__transform_stream___params_T}[params]
 * @param {QueuingStrategy<string>}[writable_strategy]
 * @param {QueuingStrategy<string>}[readable_strategy]
 * @returns {TransformStream<string, [data_row_T, header_row_T]>}
 * @private
 */
export function csv__transform_stream_(
	params = {},
	writable_strategy,
	readable_strategy
) {
	const has_csv_header =
		params.has_csv_header
		?? true
	const val__hydrate =
		params.val__hydrate
		?? (val=>val)
	const line__transform_stream =
		line__transform_stream_({
			include_line_separator: true
		}, writable_strategy, readable_strategy)
	/** @type {header_row_T} */
	let header_row
	/** @type {header_M_col_idx_T} */
	let header_M_col_idx
	const csv__transform_stream = new TransformStream({
		transform(csv, controller) {
			// skip empty line
			if (!csv.trim()) return
			const csv__parse_o = csv__table__parse_o_(has_csv_header)
			for (const val_a of csv__parse(csv, csv__parse_o)) {
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
				controller.enqueue([data_row, header_row])
			}
		},
	}, writable_strategy, readable_strategy)
	const writable = line__transform_stream.writable
	const readable = line__transform_stream.readable.pipeThrough(csv__transform_stream)
	/** @type {TransformStream<string, [data_row_T, header_row_T]>} */
	return Object.freeze({
		writable,
		readable
	})
}
