/**
 * @param row_a{unknown[][]}
 * @param column_a{string[]}
 */
export function row_a__cast(row_a, column_a) {
	for (let i = 0; i < row_a.length; i++) {
		const row = row_a[i]
		for (let j = 0; j < column_a.length; j++) {
			let value_f = parseFloat(row[j])
			if (!Number.isNaN(value_f)) {
				row[j] = value_f
			}
		}
	}
}
export {
	row_a__cast as cast_rows,
	row_a__cast as cast__rows, 
}
