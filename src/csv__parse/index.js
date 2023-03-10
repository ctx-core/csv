import { I } from '@ctx-core/combinators'
/** @typedef {import('./index.d.ts').csv__parse__iterator__on_row_T}csv__parse__iterator__on_row_T */
/** @typedef {import('./index.d.ts').csv__parse_o_T}csv__parse_o_T */
const val_start = Symbol.for('val_start')
const undelimited_input = Symbol.for('undelimited_input')
const delimited_input = Symbol.for('delimited_input')
const escaped_or_closing_delimiter = Symbol.for('escaped_or_closing_delimiter')
/**
 * Parse takes a string of CSV data and iterates through each line, either by callback or iterator.
 * Multi-line values wrapped in quotes (") are supported.
 *
 * The csv argument is expected to end with a complete line.
 * For example, when streaming data, a data chunk ending in the middle of a line may be treated as a completed row
 * (when not in an opened quote).
 * A function like @ctx-core/string > line__parse or the nodejs readline library may be useful.
 * @param {csv__parse__iterator__on_row_T|string}on_row_or_csv the CSV string to parse
 * @param {string|csv__parse_o_T}[csv_or_csv__parse_o] the CSV string to parse
 * @param {csv__parse_o_T}[csv__parse_o] an object containing csv__parse related state
 * @returns {void|Iterable<string[]>}
 * @see {@link https://github.com/vanillaes/csv}
 */
export function csv__parse(
	on_row_or_csv,
	csv_or_csv__parse_o,
	csv__parse_o
) {
	const on_row =
		typeof on_row_or_csv === 'function'
		? on_row_or_csv
		: null
	/** @type {string} */
	const csv =
		on_row
		? csv_or_csv__parse_o
		: on_row_or_csv
	if (!on_row) csv__parse_o = csv_or_csv__parse_o
	if (!csv__parse_o) csv__parse_o = csv__parse_o_()
	return (
		on_row
		? csv__parse__iterator_().next().value
		: csv__parse__iterator_())
	function* csv__parse__iterator_() {
		/** @type {string[]} */
		let match_a = []
		let match = ''
		while ((match_a = csv__parse_o.lex_regexp.exec(csv)) !== null) {
			match = match_a[0]
			switch (csv__parse_o.state) {
				case val_start:
					switch (true) {
						case match === '"':
							csv__parse_o.state = delimited_input
							break
						case match === ',':
							csv__parse_o.state = val_start
							val_end(csv__parse_o)
							break
						case csv__parse_o.new_line_regexp.test(match):
							csv__parse_o.state = val_start
							val_end(csv__parse_o)
							if (on_row) {
								on_row(row_(csv__parse_o))
							} else {
								yield row_(csv__parse_o)
							}
							row_end(csv__parse_o)
							break
						default:
							csv__parse_o.val += match
							csv__parse_o.state = undelimited_input
							break
					}
					break
				case undelimited_input:
					switch (true) {
						case match === ',':
							csv__parse_o.state = val_start
							val_end(csv__parse_o)
							break
						case csv__parse_o.new_line_regexp.test(match):
							csv__parse_o.state = val_start
							val_end(csv__parse_o)
							if (on_row) {
								on_row(row_(csv__parse_o))
							} else {
								yield row_(csv__parse_o)
							}
							row_end(csv__parse_o)
							break
						default:
							csv__parse_o.state = escaped_or_closing_delimiter
							throw Error(`CSVError: Illegal state ${JSON.stringify({
								row_idx: csv__parse_o.row_idx,
								col_idx: csv__parse_o.col_idx,
								state: 'undelimited_input',
								match,
							})}`)
					}
					break
				case delimited_input:
					switch (true) {
						case match === '"':
							csv__parse_o.state = escaped_or_closing_delimiter
							break
						default:
							csv__parse_o.state = delimited_input
							csv__parse_o.val += match
							break
					}
					break
				case escaped_or_closing_delimiter:
					switch (true) {
						case match === '"':
							csv__parse_o.state = delimited_input
							csv__parse_o.val += match
							break
						case match === ',':
							csv__parse_o.state = val_start
							val_end(csv__parse_o)
							break
						case csv__parse_o.new_line_regexp.test(match):
							csv__parse_o.state = val_start
							val_end(csv__parse_o)
							if (on_row) {
								on_row(row_(csv__parse_o))
							} else {
								yield row_(csv__parse_o)
							}
							row_end(csv__parse_o)
							break
						default:
							throw Error(`CSVError: Illegal state ${JSON.stringify({
								row_idx: csv__parse_o.row_idx,
								col_idx: csv__parse_o.col_idx,
								state: 'escaped_or_closing_delimiter',
								match,
							})}`)
					}
					break
			}
		}
		// flush the last val
		if (csv__parse_o.val_a.length !== 0 && csv__parse_o.state !== delimited_input) {
			val_end(csv__parse_o)
			if (on_row) {
				on_row(row_(csv__parse_o))
			} else {
				yield row_(csv__parse_o)
			}
			row_end(csv__parse_o)
		}
	}
}
/**
 * @returns {csv__parse_o_T}
 * @private
 */
export function csv__parse_o_() {
	return {
		val: '',
		val_: I,
		lex_regexp: csv__parse_o__lex_regexp_(),
		new_line_regexp: csv__parse_o__new_line_regexp_(),
		val_a: [],
		col_idx: 0,
		row_idx: 0,
		state: val_start,
		data: {}
	}
}
export function csv__parse_o__lex_regexp_(delimiter = ',') {
  return new RegExp('"|' + delimiter + '|\r\n|\n|\r|[^",\\r\\n]+', 'y')
}
export function csv__parse_o__new_line_regexp_() {
  return /^(\r\n|\n|\r)$/
}
/** @private */
function val_end(csv__parse_o) {
	csv__parse_o.val_a.push(csv__parse_o.val_(csv__parse_o.val))
	csv__parse_o.val = ''
	csv__parse_o.col_idx++
}
/** @private */
function row_end(csv__parse_o) {
	csv__parse_o.val_a = []
	csv__parse_o.row_idx++
	csv__parse_o.col_idx = 0
}
function row_(csv__parse_o) {
  return csv__parse_o.val_a
}
