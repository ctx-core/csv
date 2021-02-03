import Papa from 'papaparse'
export function transform_table_csv<I extends unknown = unknown>(
	csv = '',
	opts:csv_table_transform_opts_type = {},
) {
	const _cell = opts._cell || ((v:I)=>v)
	const csv_table = Papa.parse(csv, opts).data
	const csv_columns = csv_table[0]
	const csv_rows = csv_table.slice(1)
	const rows = [] as I[]
	for (let i = 0; i < csv_rows.length; i++) {
		const csv_row = csv_rows[i]
		let row = {} as I
		for (let j = 0; j < csv_columns.length; j++) {
			const column = csv_columns[j]
			const value = csv_row[j]
			const cell = _cell(value, column, j)
			row[column] = cell
		}
		rows.push(row)
	}
	return rows
}
type csv_table_transform_opts_type = {
	_cell?:(value:unknown, column:number, row:number)=>unknown
}
export { transform_table_csv as transform__table__csv }