import type { hydrated_json_val_T, table_T, val__hydrate_T } from '@ctx-core/table'
import type { readable_stream_OR_reader_T } from 'ctx-core/string'
import type {
	csv__on_data_row_T,
	csv__table__iterable_T,
	dehydrated_csv_val_T,
	has_header_csv_T
} from '../_types/index.js'
export declare function reader__csv__table_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object,
	D = dehydrated_csv_val_T,
	H = hydrated_json_val_T
>(
	on_data_row:csv__on_data_row_T<ColDefs>,
	readable_stream_or_reader:readable_stream_OR_reader_T,
	has_csv_header?:has_header_csv_T<ColDefs>,
	val__hydrate?:val__hydrate_T<ColDefs, D, H>
):Promise<void>
export declare function reader__csv__table_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object,
	D = dehydrated_csv_val_T,
	H = hydrated_json_val_T
>(
	readable_stream_or_reader:readable_stream_OR_reader_T,
	has_csv_header?:has_header_csv_T<ColDefs>,
	val__hydrate?:val__hydrate_T<ColDefs, D, H>
):csv__table__iterable_T<ColDefs>
export declare function reader__csv__table_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object,
	D = dehydrated_csv_val_T,
	H = hydrated_json_val_T
>(
	on_data_row_OR_readable_stream_OR_reader:
		csv__on_data_row_T<ColDefs>
		|readable_stream_OR_reader_T,
	readable_stream_OR_reader_OR_has_csv_header:
		readable_stream_OR_reader_T
		|boolean,
	has_csv_header_OR_val__hydrate?:
		has_header_csv_T<ColDefs>
		|val__hydrate_T<ColDefs, D, H>,
	val__hydrate?:val__hydrate_T<ColDefs, D, H>
):table_T|void|csv__table__iterable_T<ColDefs>|Promise<void>
