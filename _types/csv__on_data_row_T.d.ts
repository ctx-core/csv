import type { data_row_T, header_row_T } from '@ctx-core/table'

export type csv__on_data_row_T<
    ColDefs extends (([string, unknown][])|unknown[]|object)
> = (
    data_row:data_row_T<ColDefs>,
    header_row:header_row_T<ColDefs>,
)=>unknown|Promise<unknown>
