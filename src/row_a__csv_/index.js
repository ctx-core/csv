import { isArray, keys } from '@ctx-core/object'
import { row__csv_ } from '../row__csv_/index.js'
/**
 * @param {unknown[][]}row_a
 * @param {import('../_types').row__csv___params_T}[params]
 * @private
 */
export function row_a__csv_(row_a, params) {
	if (!row_a?.length) return ''
	const delimiter = params?.delimiter || ','
	const row_0 = row_a[0]
	const column_a =
		params?.header_row
		|| (row_0 && !isArray(row_0))
		? keys(row_0)
		: null
	return `${column_a ? `${row__csv_(column_a)}\n` : ''}${
		row_a.map(row=>row__csv_(row, {
			delimiter,
			column_a,
		})).join('\n')
	}`
}
