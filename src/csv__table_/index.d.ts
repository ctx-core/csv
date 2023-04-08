import type { readable_stream_OR_reader_T } from '@ctx-core/string'
import type { data_row_T, header_row_T, hydrated_val__T, table_T } from '@ctx-core/table'
import type { csv__on_data_row_T, has_header_csv_T } from '../_types'
declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	csv:string,
	has_csv_header?:has_header_csv_T<ColDefs>,
	val__hydrate?:hydrated_val__T
):table_T<ColDefs>
declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	on_data_row:csv__on_data_row_T<ColDefs>,
	csv:string,
	has_csv_header?:has_header_csv_T<ColDefs>,
	val__hydrate?:hydrated_val__T
):void
declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	readable_stream_OR_reader:readable_stream_OR_reader_T,
	has_csv_header?:has_header_csv_T<ColDefs>,
	val__hydrate?:hydrated_val__T
):AsyncIterable<[data_row_T<ColDefs>, header_row_T<ColDefs>]>
declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	on_data_row:csv__on_data_row_T<ColDefs>,
	readable_stream_OR_reader:readable_stream_OR_reader_T,
	has_csv_header?:has_header_csv_T<ColDefs>,
	val__hydrate?:hydrated_val__T
):Promise<void>
export declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(
	on_data_row_OR_csv_OR_readable_stream_OR_reader:
		csv__on_data_row_T<ColDefs>
		|string
		|readable_stream_OR_reader_T,
	csv_OR_readable_stream_OR_reader_OR_has_csv_header:
		string|readable_stream_OR_reader_T|boolean,
	has_csv_header_OR_val__hydrate?:has_header_csv_T<ColDefs>|hydrated_val__T,
	val__hydrate?:hydrated_val__T
):table_T|void|AsyncIterable<[data_row_T, header_row_T]>|Promise<void>
export declare function csv__table__parse_o_(
	has_csv_header:boolean,
	val__hydrate?:hydrated_val__T
):csv__table__parse_o_T
