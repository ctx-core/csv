import type { falsy } from '@ctx-core/function'
import type { WritableAtom_ } from '@ctx-core/nanostores'
import type { B } from '@ctx-core/object'
import type { table_T } from '@ctx-core/table'
export declare const csv_path__:B<csv_path__T>
interface load_csv_data_params_T {
	csv_path?:string
	table?:table_T<number>
	table_domain?:number[][]
	ticks_domain?:number[]
}
export type csv_path_T = string|null
export interface csv_path__T extends WritableAtom_<csv_path_T> {
	load_csv_data(params?:load_csv_data_params_T):Promise<load_csv_data_return_type>
}
export type load_csv_data_return_type = table_T<number>|falsy
export { csv_path__ as csv_path$_ }
