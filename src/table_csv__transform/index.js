import Papa from 'papaparse'
/**
 * @param csv{string}
 * @param opts{import('./index.d.ts').table_csv__transform__opts_T}
 * @returns {*[]}
 */
export function table_csv__transform(csv = '', opts = {}) {
	const cell_ = opts.cell_ || ((v)=>v)
	const csv_table = Papa.parse(csv).data
	const csv_columns = csv_table[0]
	const csv_rows = csv_table.slice(1)
	const rows = []
	for (let i = 0; i < csv_rows.length; i++) {
		const csv_row = csv_rows[i]
		let row = {}
		for (let j = 0; j < csv_columns.length; j++) {
			const column = csv_columns[j]
			const value = csv_row[j]
			const cell = cell_(value, column, j)
			row[column] = cell
		}
		rows.push(row)
	}
	return rows
}
export {
	table_csv__transform as transform_table_csv,
	table_csv__transform as transform__table__csv, 
}
