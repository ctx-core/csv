/** @typedef {import('@ctx-core/string').readable_stream_or_reader_T}readable_stream_or_reader_T */
/**
 * @param {unknown}maybe_readable_reader
 * @returns {boolean}
 * @private
 */
export function is_readable_stream_or_reader_(maybe_readable_reader) {
	return !!(
		maybe_readable_reader
		&& (
			maybe_readable_reader.getReader
			|| maybe_readable_reader.read))
}
