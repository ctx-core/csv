import type { data_row_T, table_T } from '@ctx-core/table'
export function csv__table_<
	ColDefs extends (([string, any][])|any[]|object)
>(
	csv:string,
	params:csv_o__params_T<ColDefs>
):table_T<ColDefs>
export interface csv_o__params_T<
	ColDefs extends (([string, any][])|any[]|object)
> {
	delimiter?:string
	has_header_row:has_header_row_T<ColDefs>
	on_data_row?:(row:data_row_T<ColDefs>)=>void
}
export type has_header_row_T<
	ColDefs extends (([string, any][])|any[]|object)
> =
	ColDefs extends [string, any][]
	? true
	: ColDefs extends any[]
		? false
		: ColDefs extends object
			? true
			: boolean
