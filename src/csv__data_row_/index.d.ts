import type { column_M_row_idx_T, data_row_T } from '@ctx-core/table'
import type { csv__hd_row___params_T } from '../_types'
export declare function csv__data_row_<
	ColDefs extends (([string, any][])|any[]|object)
>(
	csv:string,
	params?:csv__data_row___params_T<ColDefs>
):data_row_T<ColDefs>
export interface csv__data_row___params_T<
	ColDefs extends (([string, any][])|any[]|object)
> extends csv__hd_row___params_T<ColDefs> {
	column_M_row_idx:column_M_row_idx_T<ColDefs>
}
