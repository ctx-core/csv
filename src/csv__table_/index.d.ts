import type { readable_stream_or_reader_T } from '@ctx-core/string'
import type { data_row_T, header_row_T, table_T } from '@ctx-core/table'
import type { csv__on_data_row_T, has_header_csv_T } from '../_types'
declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	csv:string,
	has_csv_header?:has_header_csv_T<ColDefs>
):table_T<ColDefs>
declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	on_data_row:csv__on_data_row_T<ColDefs>,
	csv:string,
	has_csv_header?:has_header_csv_T<ColDefs>
):void
declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	readable_stream_or_reader:readable_stream_or_reader_T,
	has_csv_header?:has_header_csv_T<ColDefs>
):AsyncIterable<[data_row_T<ColDefs>, header_row_T<ColDefs>]>
declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	on_data_row:csv__on_data_row_T<ColDefs>,
	readable_stream_or_reader:readable_stream_or_reader_T,
	has_csv_header?:has_header_csv_T<ColDefs>
):Promise<void>
export declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	on_data_row_or_csv_or_readable_stream_or_reader:
		csv__on_data_row_T<ColDefs>
		|string
		|readable_stream_or_reader_T,
	csv_or_readable_stream_or_reader_or_has_csv_header:
		string|readable_stream_or_reader_T|boolean,
	has_csv_header?:has_header_csv_T<ColDefs>
):table_T|void|AsyncIterable<[data_row_T, header_row_T]>|Promise<void>
