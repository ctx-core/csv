import type { row_T } from '@ctx-core/table'

export type csv__row__row__T<
    ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> =
    (row:row_T<ColDefs>)=>
        row_T<ColDefs>
