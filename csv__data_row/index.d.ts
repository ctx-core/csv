import type { data_row_T, header_M_col_idx_T } from '@ctx-core/table'
import type { csv__data_row___parse_o_T } from '../_types/index.js'
export declare function csv__data_row_<
	ColDefs extends (([string, unknown][])|unknown[]|object)
>(
	csv:string,
	csv__parse_o?:csv__data_row___parse_o_T<ColDefs>
):data_row_T<ColDefs>
export declare function csv__data_row__parse_o_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
	header_M_col_idx:header_M_col_idx_T<ColDefs>
):csv__data_row___parse_o_T<ColDefs>
