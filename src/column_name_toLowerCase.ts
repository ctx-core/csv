export function column_name_toLowerCase(csv) {
	const csv_row_a1 = csv.split('\n')
	const out_csv =
		[csv_row_a1[0].toLowerCase(),
			...csv_row_a1.slice(1)
		].join('\n')
	return out_csv
}
export const toLowerCase__column_name = column_name_toLowerCase
export const toLowerCase__column_name__csv = column_name_toLowerCase
