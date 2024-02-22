import type { csv__parse_o_T } from './csv__parse_o_T.js'

export type csv__table__parse_o_T<
    ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> = csv__parse_o_T<ColDefs>[]
