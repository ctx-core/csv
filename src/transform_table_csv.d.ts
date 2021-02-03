export declare function transform_table_csv<I extends unknown = unknown>(csv?: string, opts?: csv_table_transform_opts_type): I[];
declare type csv_table_transform_opts_type = {
    _cell?: (value: unknown, column: number, row: number) => unknown;
};
export { transform_table_csv as transform__table__csv };
