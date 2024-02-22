import type { header_row_T } from '@ctx-core/table'
import type { csv__parse_o_T } from '../_types/index.js'
export declare function csv__header_row_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	csv:string,
	csv__parse_o:csv__parse_o_T<ColDefs>
):header_row_T<ColDefs>
