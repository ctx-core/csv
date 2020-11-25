import { $table_type, $table_domain_type } from '@ctx-core/table';
import { Writable } from '@ctx-core/store';
import type { maybe } from '@ctx-core/function';
declare type Opts__load__data__csv<I> = {
    path__csv?: string;
    table?: $table_type<I>;
    domain__table?: $table_domain_type;
    domain__ticks?: I[];
};
export declare function b__path__csv<I extends unknown = unknown>(ctx?: object): Writable<string | null> & csv_path_interface<I> & {
    load__data__csv: (opts?: Opts__load__data__csv<number>) => Promise<maybe<$table_type<unknown>, import("@ctx-core/function").falsy>>;
};
export declare type $csv_path_type = maybe<string, null>;
export declare type $type__path__csv = $csv_path_type;
export interface csv_path_interface<I> {
    load__data__csv(opts?: Opts__load__data__csv<I>): Promise<type__return__load__data__csv>;
}
export declare type csv_path_type<I> = Writable<$csv_path_type> & csv_path_interface<I>;
export declare type type__path__csv<I> = csv_path_type<I>;
export declare type type__return__load__data__csv<I extends unknown = unknown> = maybe<$table_type<I>>;
export {};
