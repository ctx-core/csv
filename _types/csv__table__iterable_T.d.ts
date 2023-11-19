import type { data_row_T, header_row_T } from '@ctx-core/table'

export type csv__table__iterable_T<
    ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> = AsyncIterable<[
    data_row_T<ColDefs>,
    header_row_T<ColDefs>
]>
