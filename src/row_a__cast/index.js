/**
 * @param rows{unknown[][]}
 * @param columns{string[]}
 */
export function row_a__cast(rows, columns) {
	for (let i = 0; i < rows.length; i++) {
		const row = rows[i]
		for (let j = 0; j < columns.length; j++) {
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
