import type { data_row_, data_row_T, header_row__new, header_row_T } from '@ctx-core/table'
import type { csv__hd_row___params_T } from '../_types'
import type { csv__val_T } from '../csv__val_'
export declare function csv__row_<
	ColDefs extends (([string, any][])|any[]|object)
>(
	csv:string,
	params:csv__row___params_T<ColDefs>
):header_row_T<ColDefs>|data_row_T<ColDefs>
export interface csv__row___params_T<
	ColDefs extends (([string, any][])|any[]|object)
> extends csv__hd_row___params_T<ColDefs> {
	row_:typeof header_row__new|typeof data_row_
	val_:(match_str:string, is_quoted:boolean)=>csv__val_T
	debug?:boolean
}
