import type { line_iterator__readable_reader_T } from '@ctx-core/string'
import type { data_row_T, table_T } from '@ctx-core/table'
import type { csv__data_row___params_T } from '../csv__data_row_'
export declare async function reader__csv__table_<
	ColDefs extends (([string, any][])|any[]|object)
>(
	readable_stream_or_reader:line_iterator__readable_reader_T,
	on_data_row:reader__csv__table__on_data_row_T<ColDefs>,
):Promise<table_T<ColDefs>>
export type reader__csv__table__on_data_row_T<
	ColDefs extends (([string, any][])|any[]|object)
> = (
	row:data_row_T<ColDefs>,
	data_row_a:data_row_T<ColDefs>[],
	csv?:string,
	params?:csv__data_row___params_T<ColDefs>,
	table?:table_T<ColDefs>,
)=>void
