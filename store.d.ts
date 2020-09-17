import { $table_type } from '@ctx-core/table/store';
import { Writable } from '@ctx-core/store';
import type { maybe } from '@ctx-core/function';
declare type Opts__load__data__csv<I = unknown> = {
    path__csv?: string;
    table?: $table_type<I>;
    domain__table?: $table_type<I>;
    domain__ticks?: I[];
};
export declare function b__path__csv(ctx?: unknown): type__path__csv;
export declare type $type__path__csv = maybe<string, null>;
export declare type type__path__csv = Writable<$type__path__csv> & {
    load__data__csv(opts?: Opts__load__data__csv): Promise<type__return__load__data__csv>;
};
export declare type type__return__load__data__csv = maybe<$table_type<number>>;
export {};
