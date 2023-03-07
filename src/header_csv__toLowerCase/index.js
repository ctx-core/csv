/**
 * @param csv{string}
 * @returns {string}
 */
export function header_csv__toLowerCase(csv) {
	const csv_row_a = csv.split('\n')
	const out_csv = [
		csv_row_a[0].toLowerCase(),
		...csv_row_a.slice(1)
	].join('\n')
	return out_csv
}
export {
	header_csv__toLowerCase as column_name__toLowerCase,
	header_csv__toLowerCase as column_name_toLowerCase,
	header_csv__toLowerCase as toLowerCase__column_name,
	header_csv__toLowerCase as toLowerCase__column_name__csv,
}
