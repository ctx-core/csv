import { $table_type, $type__domain__table } from '@ctx-core/table/store';
import { Writable } from '@ctx-core/store';
import type { maybe } from '@ctx-core/function';
declare type Opts__load__data__csv<I> = {
    path__csv?: string;
    table?: $table_type<I>;
    domain__table?: $type__domain__table;
    domain__ticks?: I[];
};
export declare function b__path__csv<I extends unknown = unknown>(ctx?: object): type__path__csv<I>;
export declare type $type__path__csv = maybe<string, null>;
export declare type type__path__csv<I> = Writable<$type__path__csv> & {
    load__data__csv(opts?: Opts__load__data__csv<I>): Promise<type__return__load__data__csv>;
};
export declare type type__return__load__data__csv = maybe<$table_type<number>>;
export {};
