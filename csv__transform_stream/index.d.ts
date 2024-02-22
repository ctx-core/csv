import type { hydrated_json_val_T, row_pair_T } from '@ctx-core/table'
import type { csv__transform_stream___params_T, dehydrated_csv_val_T } from '../_types/index.js'
declare function csv__transform_stream_<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object,
	D = dehydrated_csv_val_T,
	H = hydrated_json_val_T
>(
	params?:csv__transform_stream___params_T<ColDefs, D, H>,
	writable_strategy?:QueuingStrategy<string>,
	readable_strategy?:QueuingStrategy<string>
):TransformStream<string, row_pair_T<ColDefs>>
