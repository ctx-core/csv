import { $table_type, $table_domain_type } from '@ctx-core/table';
import { Writable } from '@ctx-core/store';
import type { maybe } from '@ctx-core/function';
declare type Opts__load__data__csv<I> = {
    path__csv?: string;
    table?: $table_type<I>;
    domain__table?: $table_domain_type;
    domain__ticks?: I[];
};
export declare function b__path__csv<I extends unknown = unknown>(ctx?: object): Writable<string | null> & {
    load__data__csv(opts?: Opts__load__data__csv<I> | undefined): Promise<maybe<$table_type<unknown>, import("@ctx-core/function").falsy>>;
} & {
    load__data__csv: (opts?: Opts__load__data__csv<number>) => Promise<maybe<$table_type<unknown>, import("@ctx-core/function").falsy>>;
};
export declare type $type__path__csv = maybe<string, null>;
export declare type type__path__csv<I> = Writable<$type__path__csv> & {
    load__data__csv(opts?: Opts__load__data__csv<I>): Promise<type__return__load__data__csv>;
};
export declare type type__return__load__data__csv<I extends unknown = unknown> = maybe<$table_type<I>>;
export {};
