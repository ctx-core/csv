import type { header_row_T } from '@ctx-core/table'
import type { csv__parse_o_T } from '../csv__parse'
export declare function csv__header_row_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	csv:string,
	csv__parse_o:csv__parse_o_T
):header_row_T<ColDefs>
