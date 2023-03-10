import { csv__table_ } from '../csv__table_/index.js'
/** @typedef {import('@ctx-core/string').readable_reader_T}readable_reader_T */
/** @typedef {import('@ctx-core/table').data_row_T}data_row_T */
/** @typedef {import('@ctx-core/table').header_row_T}header_row_T */
/** @typedef {import('@ctx-core/table').table_T}table_T */
/** @typedef {import('./index.d.ts').csv__on_data_row_T}csv__on_data_row_T */
/** @typedef {import('./index.d.ts').reader__csv__table___params_T}reader__csv__table___params_T */
/**
 * @param {csv__on_data_row_T|readable_reader_T}on_data_row_or_readable_stream_or_reader
 * @param {readable_reader_T|boolean}[readable_stream_or_reader_or_has_csv_header]
 * @param {boolean}[has_csv_header]
 * @returns {AsyncIterable<[data_row_T, header_row_T]>|Promise<void>}
 * @private
 */
export {
	csv__table_ as reader__csv__table_
}
