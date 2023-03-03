export declare function table_csv__transform<
	Val extends unknown = unknown
>(
	csv?:string,
	opts?:table_csv__transform__opts_T<Val>,
):Record<string, Val>[]
export {
	table_csv__transform as transform_table_csv,
	table_csv__transform as transform__table__csv,
}
export type table_csv__transform__opts_T<Val extends unknown = unknown> = {
	cell_?:(value:Val, column:string, row:number)=>Val
}
export declare type csv_table_transform_opts_type = table_csv__transform__opts_T
