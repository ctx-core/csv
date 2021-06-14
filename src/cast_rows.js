export function cast_rows(rows, columns) {
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        for (let j = 0; j < columns.length; j++) {
            let value_f = parseFloat(row[j]);
            if (!Number.isNaN(value_f)) {
                row[j] = value_f;
            }
        }
    }
}
export { cast_rows as cast__rows };
//# sourceMappingURL=src/cast_rows.js.map