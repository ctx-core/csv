import Papa from 'papaparse'
import { assign, _b } from '@ctx-core/object'
import type { maybe } from '@ctx-core/function'
import {
	$table_type, $table_domain_type, table_domain_b, ticks_domain_b, table_b, row_type,
} from '@ctx-core/table'
import { fetch } from '@ctx-core/fetch'
import { get, writable, change_once_subscribe, Writable } from '@ctx-core/store'
import { cast_rows } from './cast_rows'
import { push_row_id_i } from './push_row_id_i'
export function csv_path_b<I extends unknown = unknown, C extends object = object>(ctx:C) {
	return _b('csv_path', (ctx:C)=>{
		const csv_path = writable(null) as csv_path_type<I>
		return assign(csv_path, {
			load_csv_data,
		})
		function load_csv_data(opts = {} as load_csv_data_opts_type<number>) {
			const csv_path = opts.path__csv || get(csv_path_b(ctx))
			const table = table_b(ctx)
			let $table = opts.table || get(table)
			let domain__table =
				opts.domain__table || get(table_domain_b(ctx))
			let domain__ticks =
				opts.domain__ticks || get(ticks_domain_b(ctx))
			return new Promise<load_csv_data_return_type>(
				resolve=>{
					// TODO: move to a web worker
					setTimeout(()=>{
						if (!$table && csv_path) {
							(async ()=>{
								const response = await fetch(csv_path)
								const text = await response.text()
								$table = Papa.parse(text).data
								const columns = $table[0]
								const rows = $table.slice(1)
								cast_rows(rows, columns)
								push_row_id_i(rows, columns)
								table_b(ctx).set($table as $table_type<row_type>)
								table_domain_b(ctx).set(domain__table)
								ticks_domain_b(ctx).set(domain__ticks)
								// wait for agent change events to propagate
								change_once_subscribe(table, resolve)
							})()
						}
					})
				}) as Promise<load_csv_data_return_type>
		}
	})(ctx)
}
interface load_csv_data_opts_type<I> {
	path__csv?:string
	table?:$table_type<I>
	domain__table?:$table_domain_type
	domain__ticks?:I[]
}
export type $csv_path_type = maybe<string, null>
export interface csv_path_interface<I> {
	load_csv_data(opts?:load_csv_data_opts_type<I>):Promise<load_csv_data_return_type>
}
export type csv_path_type<I> =
	Writable<$csv_path_type>
	&csv_path_interface<I>
export type load_csv_data_return_type<I extends unknown = unknown> = maybe<$table_type<I>>
export {
	csv_path_b as b__path__csv,
	$csv_path_type as $type__path__csv,
	csv_path_type as type__path__csv,
	load_csv_data_return_type as type__return__load__data__csv,
}
