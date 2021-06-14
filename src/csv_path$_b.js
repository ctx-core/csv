import Papa from 'papaparse';
import { assign, be_ } from '@ctx-core/object';
import { table_domain$_b, ticks_domain$_b, table$_b, } from '@ctx-core/table';
import { fetch } from '@ctx-core/fetch';
import { writable$, change_once_subscribe } from '@ctx-core/store';
import { cast_rows } from './cast_rows';
import { push_row_id_i } from './push_row_id_i';
const key = 'csv_path$';
export const csv_path$_b = be_(key, ctx => {
    const csv_path = writable$(null);
    return assign(csv_path, {
        load_csv_data,
    });
    function load_csv_data(params = {}) {
        const csv_path = params.csv_path || csv_path$_b(ctx)._;
        const table = table$_b(ctx);
        let $table = params.table || table.$;
        let table_domain = params.table_domain || table_domain$_b(ctx)._;
        let ticks_domain = params.ticks_domain || ticks_domain$_b(ctx)._;
        return new Promise(resolve => {
            // TODO: move to a web worker
            setTimeout(async () => {
                if (!$table && csv_path) {
                    const response = await fetch(csv_path);
                    const text = await response.text();
                    $table = Papa.parse(text).data;
                    const columns = $table[0];
                    const rows = $table.slice(1);
                    cast_rows(rows, columns);
                    push_row_id_i(rows, columns);
                    table$_b(ctx)._ = $table;
                    table_domain$_b(ctx)._ = table_domain;
                    ticks_domain$_b(ctx)._ = ticks_domain;
                    // wait for agent change events to propagate
                    change_once_subscribe(table, resolve);
                }
            });
        });
    }
});
export { csv_path$_b as b__csv_path, };
//# sourceMappingURL=src/csv_path$_b.js.map