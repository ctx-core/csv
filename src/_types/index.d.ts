import type { data_row_T, header_row_T } from '@ctx-core/table'
export interface row__csv___params_T {
	delimiter?:string
	header_row?:string[]
}
export type has_header_csv_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> =
	ColDefs extends [string, any][]
	? true
	: ColDefs extends any[]
		? false
		: ColDefs extends object
			? true
			: boolean
export type csv__on_data_row_T<
	ColDefs extends (([string, any][])|any[]|object)
> = (
	data_row:data_row_T<ColDefs>,
	header_row:header_row_T<ColDefs>,
)=>any|Promise<any>
