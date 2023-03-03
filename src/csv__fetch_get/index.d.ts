import type { falsy } from '@ctx-core/function'
import type { table_T } from '@ctx-core/table'
export declare function csv__fetch_get(
	params?:csv__fetch_get__params_T
):Promise<csv__fetch_get__ret_T>
export interface csv__fetch_get__params_T {
	csv_path?:string
	table?:table_T<number>
}
export type csv__fetch_get__ret_T = table_T<number>|falsy
