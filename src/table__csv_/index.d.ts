import type { table_T } from '@ctx-core/table'
export declare function table__csv_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(table:table_T<ColDefs>, params?:table__csv___params_T):string
export interface table__csv___params_T {
	render_header_row?:boolean
	delimiter?:string
}
