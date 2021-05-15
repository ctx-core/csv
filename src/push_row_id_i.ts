export function push_row_id_i(rows:number[][], columns:string[]) {
	columns.push('row_id', 'i')
	for (let i = 0; i < rows.length; i++) {
		const row = rows[i]
		row.push(i + 1) // id based on index
		row.push(i) // index
	}
}
export {
	push_row_id_i as push__row_id__i
}
