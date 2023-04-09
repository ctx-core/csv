import type { data_row_T, header_row_T } from '@ctx-core/table'
import type { csv__row__parse_o_T, csv__row__row__T } from '../_types'
export declare function csv__row_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	csv:string,
	csv__parse_o:csv__row__parse_o_T<ColDefs>
):header_row_T<ColDefs>|data_row_T<ColDefs>
export declare function csv__row__parse_o_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	row_:csv__row__row__T<ColDefs>
):csv__row__parse_o_T<ColDefs>
