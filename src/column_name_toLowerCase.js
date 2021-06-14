export function column_name_toLowerCase(csv) {
    const csv_row_a = csv.split('\n');
    const out_csv = [csv_row_a[0].toLowerCase(),
        ...csv_row_a.slice(1)
    ].join('\n');
    return out_csv;
}
export { column_name_toLowerCase as toLowerCase__column_name, column_name_toLowerCase as toLowerCase__column_name__csv, };
//# sourceMappingURL=src/column_name_toLowerCase.js.map