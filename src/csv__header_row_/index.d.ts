import type { header_row_T } from '@ctx-core/table'
import type { csv__hd_row___params_T } from '../_types'
export declare function csv__header_row_<
	ColDefs extends (([string, any][])|any[]|object)
>(
	csv:string,
	params?:csv__hd_row___params_T
):header_row_T<ColDefs>
