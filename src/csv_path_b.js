import Papa from 'papaparse';
import { assign, _b } from '@ctx-core/object';
import { table_domain_b, ticks_domain_b, table_b } from '@ctx-core/table';
import { fetch } from '@ctx-core/fetch';
import { get, writable, change_once_subscribe } from '@ctx-core/store';
import { cast_rows } from './cast_rows';
import { push_row_id_i } from './push_row_id_i';
const key = 'csv_path';
export const csv_path_b = _b(key, ctx => {
    const csv_path = writable(null);
    return assign(csv_path, {
        load_csv_data,
    });
    function load_csv_data(params = {}) {
        const csv_path = params.csv_path || get(csv_path_b(ctx));
        const table = table_b(ctx);
        let $table = params.table || table.$;
        let table_domain = params.table_domain || get(table_domain_b(ctx));
        let ticks_domain = params.ticks_domain || get(ticks_domain_b(ctx));
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
                    table_b(ctx).set($table);
                    table_domain_b(ctx).set(table_domain);
                    ticks_domain_b(ctx).set(ticks_domain);
                    // wait for agent change events to propagate
                    change_once_subscribe(table, resolve);
                }
            });
        });
    }
});
export { csv_path_b as b__csv_path, };
