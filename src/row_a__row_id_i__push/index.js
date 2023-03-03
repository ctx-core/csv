/**
 * @param row_a{number[][]}
 * @param columns{string[]}
 */
export function row_a__row_id_i__push(row_a, columns) {
	columns.push('row_id', 'i')
	for (let i = 0; i < row_a.length; i++) {
		const row = row_a[i]
		row.push(i + 1) // id based on index
		row.push(i) // index
	}
}
export {
	row_a__row_id_i__push as push_row_id_i,
	row_a__row_id_i__push as push__row_id__i, 
}
