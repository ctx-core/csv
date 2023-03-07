import { row__csv_ } from '../row__csv_/index.js'
import { row_a__csv_ } from '../row_a__csv_/index.js'
/**
 * @param {import('@ctx-core/table').table_T}table
 * @param {import('./index.d.ts').table__csv___params_T}[params]
 * @private
 */
export function table__csv_(table, params) {
	const delimiter = params?.delimiter || ','
	const render_header_row = params?.render_header_row ?? true
	const { header_row, data_row_a } = table
	return `${
		render_header_row
		? `${row__csv_(header_row, { delimiter })}\n`
		: ''
	}${row_a__csv_(data_row_a, { delimiter, header_row })}`
}
