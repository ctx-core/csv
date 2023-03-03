import Papa from 'papaparse'
/**
 * @param csv{string}
 * @param opts{import('./index.d.ts').table_csv__transform__opts_T}
 * @returns {Record<string, unknown>[]}
 */
export function table_csv__transform(
	csv = '',
	opts = {}
) {
	const cell_ =
		opts.cell_
		|| ((v)=>v)
	const csv_table = Papa.parse(csv).data
	const csv_columns = csv_table[0]
	const csv_row_a = csv_table.slice(1)
	const row_a = []
	for (let i = 0; i < csv_row_a.length; i++) {
		const csv_row = csv_row_a[i]
		let row = {}
		for (let j = 0; j < csv_columns.length; j++) {
			const column = csv_columns[j]
			const value = csv_row[j]
			const cell = cell_(value, column, j)
			row[column] = cell
		}
		row_a.push(row)
	}
	return row_a
}
export {
	table_csv__transform as transform_table_csv,
	table_csv__transform as transform__table__csv, 
}
