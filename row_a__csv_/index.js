import { isArray } from '@ctx-core/function'
import { keys } from '@ctx-core/object'
import { row__csv_ } from '../row__csv_/index.js'
/**
 * @param {unknown[][]}row_a
 * @param {import('../_types/index.js').row__csv___params_T}[params]
 * @private
 */
export function row_a__csv_(
	row_a,
	params = {}
) {
	if (!row_a?.length) return ''
	const delimiter =
		params.delimiter
		|| ','
	const row_0 = row_a[0]
	const header_row =
		params.header_row
		? params.header_row
		: row_0 && !isArray(row_0)
			? keys(row_0)
			: null
	return `${header_row ? `${
		row__csv_(
			header_row,
			{ delimiter }
		)}\n` : ''}${
		row_a.map(row=>
			row__csv_(row, {
				delimiter,
				header_row,
			})).join('\n')
	}`
}
