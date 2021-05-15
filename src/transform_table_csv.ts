import Papa from 'papaparse'
export function transform_table_csv<Val extends unknown = unknown>(
	csv = '',
	opts:csv_table_transform_opts_type<Val> = {},
) {
	const _cell = opts._cell || ((v:Val)=>v)
	const csv_table = Papa.parse<any>(csv).data
	const csv_columns:string[] = csv_table[0]
	const csv_rows:Val[][] = csv_table.slice(1)
	const rows:Record<string, Val>[] = []
	for (let i = 0; i < csv_rows.length; i++) {
		const csv_row = csv_rows[i]
		let row:Record<string, Val> = {}
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
type csv_table_transform_opts_type<Val extends unknown = unknown> = {
	_cell?:(value:Val, column:string, row:number)=>Val
}
export { transform_table_csv as transform__table__csv }
