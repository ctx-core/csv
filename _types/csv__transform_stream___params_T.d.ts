import type { hydrated_json_val_T, val__hydrate_T } from '@ctx-core/table'
import type { dehydrated_csv_val_T } from './dehydrated_csv_val_T.js'
import type { has_header_csv_T } from './has_header_csv_T.js'

export interface csv__transform_stream___params_T<
    ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
    D = dehydrated_csv_val_T,
    H = hydrated_json_val_T
> {
    has_csv_header?:has_header_csv_T<ColDefs>,
    val__hydrate?:val__hydrate_T<ColDefs, D, H>
}
