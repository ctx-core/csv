import type { row_T } from '@ctx-core/table'

export type csv__row__row__T<
    ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> =
    (row:row_T<ColDefs>)=>
        row_T<ColDefs>
