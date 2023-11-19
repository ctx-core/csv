import type { csv__parse_o_T } from './csv__parse_o_T.js'
import type { csv__row__row__T } from './csv__row__row__T.js'

export type csv__row__parse_o_T<
    ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> = csv__parse_o_T<{
    row_:csv__row__row__T<ColDefs>
}>
