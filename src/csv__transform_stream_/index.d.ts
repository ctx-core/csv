import type { data_row_T, header_row_T, hydrated_json_val_T, val__hydrate_T } from '@ctx-core/table'
import type { csv__transform_stream___params_T, dehydrated_csv_val_T, has_header_csv_T } from '../_types'
declare function csv__transform_stream_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_csv_val_T,
	H = hydrated_json_val_T
>(
	params?:csv__transform_stream___params_T<ColDefs, D, H>,
	writable_strategy?:QueuingStrategy<string>,
	readable_strategy?:QueuingStrategy<string>
):TransformStream<string, [data_row_T<ColDefs>, header_row_T<ColDefs>]>
