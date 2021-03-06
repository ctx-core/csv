import type { maybe } from '@ctx-core/function';
import { $table_type, $table_domain_type } from '@ctx-core/table';
import { Writable } from '@ctx-core/store';
export declare function csv_path_b<I extends unknown = unknown, C extends object = object>(ctx: C): csv_path_type<I>;
interface load_csv_data_opts_type<I> {
    path__csv?: string;
    table?: $table_type<I>;
    domain__table?: $table_domain_type;
    domain__ticks?: I[];
}
export declare type $csv_path_type = maybe<string, null>;
export interface csv_path_type<I> extends Writable<$csv_path_type> {
    load_csv_data(opts?: load_csv_data_opts_type<I>): Promise<load_csv_data_return_type>;
}
export declare type load_csv_data_return_type<I extends unknown = unknown> = maybe<$table_type<I>>;
export { csv_path_b as b__path__csv, };
