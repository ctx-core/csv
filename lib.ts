import Papa from 'papaparse'
type Opts__transform__table__csv = {
	_cell?:(value:unknown, column:number, row:number)=>unknown
}
export function transform__table__csv(
	csv = '',
	opts:Opts__transform__table__csv = {},
) {
	const _cell = opts._cell || ((v:unknown)=>v)
	const table__csv = Papa.parse(csv, opts).data
	const columns__csv = table__csv[0]
	const rows__csv = table__csv.slice(1)
	const rows = []
	for (let i = 0; i < rows__csv.length; i++) {
		const row__csv = rows__csv[i]
		let row = {}
		for (let j = 0; j < columns__csv.length; j++) {
			const column = columns__csv[j]
			const value = row__csv[j]
			const cell = _cell(value, column, j)
			row[column] = cell
		}
		rows.push(row)
	}
	return rows
}
export function cast__rows(rows, columns) {
	for (let i = 0; i < rows.length; i++) {
		const row = rows[i]
		for (let j = 0; j < columns.length; j++) {
			let value__f = parseFloat(row[j])
			if (!Number.isNaN(value__f)) {
				row[j] = value__f
			}
		}
	}
}
export function push__row_id__i(rows, columns) {
	columns.push('row_id', 'i')
	for (let i = 0; i < rows.length; i++) {
		const row = rows[i]
		row.push(i + 1) // id based on index
		row.push(i) // index
	}
}
export function toLowerCase__column_name(csv) {
	const a1__row__csv = csv.split('\n')
	const csv__ =
		[a1__row__csv[0].toLowerCase(),
			...a1__row__csv.slice(1)
		].join('\n')
	return csv__
}
export const toLowerCase__column_name__csv = toLowerCase__column_name
