import type { readable_stream_OR_reader_T } from '@ctx-core/string'
import type { hydrated_json_val_T, table_T, val__hydrate_T } from '@ctx-core/table'
import type {
	csv__on_data_row_T,
	csv__table__iterable_T,
	csv__table__parse_o_T,
	dehydrated_csv_val_T,
	has_header_csv_T
} from '../_types/index.js'
export declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_csv_val_T,
	H = hydrated_json_val_T
>(
	csv:string,
	has_csv_header?:has_header_csv_T<ColDefs>,
	val__hydrate?:val__hydrate_T<ColDefs, D, H>
):table_T<ColDefs>
export declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_csv_val_T,
	H = hydrated_json_val_T
>(
	on_data_row:csv__on_data_row_T<ColDefs>,
	csv:string,
	has_csv_header?:has_header_csv_T<ColDefs>,
	val__hydrate?:val__hydrate_T<ColDefs, D, H>
):void
export declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_csv_val_T,
	H = hydrated_json_val_T
>(
	readable_stream_OR_reader:readable_stream_OR_reader_T,
	has_csv_header?:has_header_csv_T<ColDefs>,
	val__hydrate?:val__hydrate_T<ColDefs, D, H>
):csv__table__iterable_T<ColDefs>
export declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_csv_val_T,
	H = hydrated_json_val_T
>(
	on_data_row:csv__on_data_row_T<ColDefs>,
	readable_stream_OR_reader:readable_stream_OR_reader_T,
	has_csv_header?:has_header_csv_T<ColDefs>,
	val__hydrate?:val__hydrate_T<ColDefs, D, H>
):Promise<void>
export declare function csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_csv_val_T,
	H = hydrated_json_val_T
>(
	on_data_row_OR_csv_OR_readable_stream_OR_reader:
		csv__on_data_row_T<ColDefs>
		|string
		|readable_stream_OR_reader_T,
	csv_OR_readable_stream_OR_reader_OR_has_csv_header:
		string
		|readable_stream_OR_reader_T
		|boolean,
	has_csv_header_OR_val__hydrate?:
		has_header_csv_T<ColDefs>
		|val__hydrate_T<ColDefs, D, H>,
	val__hydrate?:val__hydrate_T<ColDefs, D, H>
):table_T|void|csv__table__iterable_T<ColDefs>|Promise<void>
export declare function csv__table__parse_o_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_csv_val_T,
	H = hydrated_json_val_T
>(
	has_csv_header:boolean,
	val__hydrate?:val__hydrate_T<ColDefs, D, H>
):csv__table__parse_o_T<ColDefs>