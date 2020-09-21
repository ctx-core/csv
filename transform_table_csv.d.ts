export declare function transform_table_csv<I extends unknown>(csv?: string, opts?: Opts__transform__table__csv): I[];
export declare const transform__table__csv: typeof transform_table_csv;
declare type Opts__transform__table__csv = {
    _cell?: (value: unknown, column: number, row: number) => unknown;
};
export {};
