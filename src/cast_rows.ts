export function cast_rows<Val extends unknown = unknown>(rows: Val[][], columns:string[]):void {
	for (let i = 0; i < rows.length; i++) {
		const row = rows[i]
		for (let j = 0; j < columns.length; j++) {
			let value_f = parseFloat(row[j] as string)
			if (!Number.isNaN(value_f)) {
				(row[j] as number) = value_f
			}
		}
	}
}
export {
	cast_rows as cast__rows
}
