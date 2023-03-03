/**
 * @param csv{string}
 * @returns {string}
 */
export function column_name__toLowerCase(csv) {
	const csv_row_a = csv.split('\n')
	const out_csv = [
		csv_row_a[0].toLowerCase(),
		...csv_row_a.slice(1)
	].join('\n')
	return out_csv
}
export {
	column_name__toLowerCase as column_name_toLowerCase,
	column_name__toLowerCase as toLowerCase__column_name,
	column_name__toLowerCase as toLowerCase__column_name__csv,
}
