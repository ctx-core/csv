import type { readable_stream_or_reader_T } from '@ctx-core/string'
import type { data_row_T, header_row_T, table_T } from '@ctx-core/table'
import type { csv__on_data_row_T, has_header_csv_T } from '../_types'
export declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	csv:string,
	has_csv_header?:has_header_csv_T<ColDefs>
):table_T<ColDefs>
export declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	on_data_row:csv__on_data_row_T<ColDefs>,
	csv:string,
	has_csv_header?:has_header_csv_T<ColDefs>
):void
export declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	readable_stream_or_reader:readable_stream_or_reader_T,
	has_csv_header?:has_header_csv_T<ColDefs>
):AsyncIterable<[data_row_T<ColDefs>, header_row_T<ColDefs>]>
export declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	on_data_row:csv__on_data_row_T<ColDefs>,
	readable_stream_or_reader:readable_stream_or_reader_T,
	has_csv_header?:has_header_csv_T<ColDefs>
):Promise<void>
