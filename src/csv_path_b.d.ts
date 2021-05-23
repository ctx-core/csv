import type { falsy } from '@ctx-core/function';
import { $table_T, $table_domain_T } from '@ctx-core/table';
import { Writable } from '@ctx-core/store';
import type { csv_Ctx } from './csv_Ctx';
export declare const csv_path_b: import("@ctx-core/object").Be<csv_Ctx, "csv_path", csv_path_T>;
interface load_csv_data_params_T {
    csv_path?: string;
    table?: $table_T<number>;
    table_domain?: $table_domain_T;
    ticks_domain?: number[];
}
export declare type $csv_path_type = string | null;
export interface csv_path_T extends Writable<$csv_path_type> {
    load_csv_data(params?: load_csv_data_params_T): Promise<load_csv_data_return_type>;
}
export declare type load_csv_data_return_type = $table_T<number> | falsy;
export { csv_path_b as b__csv_path, };
