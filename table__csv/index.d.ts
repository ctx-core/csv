import type { table_T } from '@ctx-core/table'
import type { table__csv___params_T } from '../_types/index.js'

export declare function table__csv_<
    ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
>(
    table:table_T<ColDefs>,
    params?:table__csv___params_T
):string
