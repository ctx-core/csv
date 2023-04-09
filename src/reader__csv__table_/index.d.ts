import type { readable_stream_OR_reader_T } from '@ctx-core/string'
import type { data_row_T, header_row_T, hydrated_json_val_T, hydrated_val__T } from '@ctx-core/table'
import type { csv__on_data_row_T, has_header_csv_T } from '../_types'
export declare async function reader__csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = hydrated_json_val_T
>(
	readable_stream_or_reader:readable_stream_OR_reader_T,
	has_csv_header?:has_header_csv_T<ColDefs>,
	val__hydrate?:hydrated_val__T<ColDefs, D>
):AsyncIterable<[data_row_T<ColDefs>, header_row_T<ColDefs>]>
export declare async function reader__csv__table_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = hydrated_json_val_T
>(
	on_data_row:csv__on_data_row_T<ColDefs>,
	readable_stream_or_reader:readable_stream_OR_reader_T,
	has_csv_header?:has_header_csv_T<ColDefs>,
	val__hydrate?:hydrated_val__T<ColDefs, D>
):Promise<void>
