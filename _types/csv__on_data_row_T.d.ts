import type { data_row_T, header_row_T } from '@ctx-core/table'

export type csv__on_data_row_T<
    ColDefs extends (([string, any][])|any[]|object)
> = (
    data_row:data_row_T<ColDefs>,
    header_row:header_row_T<ColDefs>,
)=>any|Promise<any>
