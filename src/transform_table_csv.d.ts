export declare function transform_table_csv<Val extends unknown = unknown>(csv?: string, opts?: csv_table_transform_opts_type<Val>): Record<string, Val>[];
declare type csv_table_transform_opts_type<Val extends unknown = unknown> = {
    _cell?: (value: Val, column: string, row: number) => Val;
};
export { transform_table_csv as transform__table__csv };
