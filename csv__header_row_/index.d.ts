import type { header_row_T } from '@ctx-core/table'
import type { csv__parse_o_T } from '../_types/index.js'
export declare function csv__header_row_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	csv:string,
	csv__parse_o:csv__parse_o_T<ColDefs>
):header_row_T<ColDefs>