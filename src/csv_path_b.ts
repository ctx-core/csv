import Papa from 'papaparse'
import type { falsy } from '@ctx-core/function'
import { assign, _b } from '@ctx-core/object'
import {
	$table_T, $table_domain_T, table_domain_b, ticks_domain_b, table_b
} from '@ctx-core/table'
import { fetch } from '@ctx-core/fetch'
import { get, writable, change_once_subscribe, Writable } from '@ctx-core/store'
import { cast_rows } from './cast_rows'
import { push_row_id_i } from './push_row_id_i'
import type { csv_Ctx } from './csv_Ctx'
const key = 'csv_path'
export const csv_path_b = _b<csv_Ctx, typeof key>(key, ctx=>{
	const csv_path = writable<$csv_path_type>(null)
	return assign(csv_path, {
		load_csv_data,
	}) as csv_path_T
	function load_csv_data(params = {} as load_csv_data_params_T) {
		const csv_path = params.csv_path || get(csv_path_b(ctx))
		const table = table_b<number>(ctx)
		let $table:$table_T<number> = params.table || table.$
		let table_domain =
			params.table_domain || get(table_domain_b(ctx))
		let ticks_domain =
			params.ticks_domain || get(ticks_domain_b(ctx))
		return new Promise<load_csv_data_return_type>(
			resolve=>{
				// TODO: move to a web worker
				setTimeout(async ()=>{
					if (!$table && csv_path) {
						const response = await fetch(csv_path)
						const text = await response.text()
						$table = Papa.parse<any>(text).data
						const columns = $table[0] as string[]
						const rows = $table.slice(1) as number[][]
						cast_rows(rows, columns)
						push_row_id_i(rows, columns)
						table_b(ctx).set($table as $table_T<number>)
						table_domain_b(ctx).set(table_domain)
						ticks_domain_b(ctx).set(ticks_domain)
						// wait for agent change events to propagate
						change_once_subscribe(table, resolve)
					}
				})
			}) as Promise<load_csv_data_return_type>
	}
})
interface load_csv_data_params_T {
	csv_path?:string
	table?:$table_T<number>
	table_domain?:$table_domain_T
	ticks_domain?:number[]
}
export type $csv_path_type = string|null
export interface csv_path_T extends Writable<$csv_path_type> {
	load_csv_data(params?:load_csv_data_params_T):Promise<load_csv_data_return_type>
}
export type load_csv_data_return_type = $table_T<number>|falsy
export {
	csv_path_b as b__csv_path,
}
