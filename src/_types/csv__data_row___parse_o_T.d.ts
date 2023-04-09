import type { header_M_col_idx_T } from '@ctx-core/table'
import type { csv__parse_o_T } from '../csv__parse'
export type csv__data_row___parse_o_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> = csv__parse_o_T<{
	header_M_col_idx:header_M_col_idx_T<ColDefs>
}>
