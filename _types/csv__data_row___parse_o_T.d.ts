import type { header_M_col_idx_T } from '@ctx-core/table'
import { csv__parse_o_T } from './csv__parse_o_T.js'
export type csv__data_row___parse_o_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> = csv__parse_o_T<{
	header_M_col_idx:header_M_col_idx_T<ColDefs>
}>
