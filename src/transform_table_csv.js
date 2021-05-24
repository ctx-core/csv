import Papa from 'papaparse';
export function transform_table_csv(csv = '', opts = {}) {
    const _cell = opts._cell || ((v) => v);
    const csv_table = Papa.parse(csv).data;
    const csv_columns = csv_table[0];
    const csv_rows = csv_table.slice(1);
    const rows = [];
    for (let i = 0; i < csv_rows.length; i++) {
        const csv_row = csv_rows[i];
        let row = {};
        for (let j = 0; j < csv_columns.length; j++) {
            const column = csv_columns[j];
            const value = csv_row[j];
            const cell = _cell(value, column, j);
            row[column] = cell;
        }
        rows.push(row);
    }
    return rows;
}
export { transform_table_csv as transform__table__csv };
