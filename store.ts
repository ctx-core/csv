import { assign, _b } from '@ctx-core/object'
import {
	$table_type, $table_domain_type,
	table_domain_b, ticks_domain_b, table_b, row_type,
} from '@ctx-core/table'
import { fetch } from '@ctx-core/fetch'
import Papa from 'papaparse'
import { get, writable, change_once_subscribe, Writable } from '@ctx-core/store'
import type { maybe } from '@ctx-core/function'
import { cast_rows } from './cast_rows'
import { push_row_id_i } from './push_row_id_i'
type Opts__load__data__csv<I> = {
	path__csv?:string
	table?:$table_type<I>
	domain__table?:$table_domain_type
	domain__ticks?:I[]
}
export function b__path__csv<I extends unknown = unknown>(ctx?:object) {
	return _b('__path__csv', ctx=>{
		const __path__csv = writable(null) as type__path__csv<I>
		return assign(__path__csv, {
			load__data__csv,
		})
		function load__data__csv(opts = {} as Opts__load__data__csv<number>) {
			const path__csv = opts.path__csv || get(b__path__csv(ctx))
			const table = table_b(ctx)
			let $table = opts.table || get(table)
			let domain__table =
				opts.domain__table || get(table_domain_b(ctx))
			let domain__ticks =
				opts.domain__ticks || get(ticks_domain_b(ctx))
			return new Promise<type__return__load__data__csv>(
				resolve=>{
					// TODO: move to a web worker
					setTimeout(()=>{
						if (!$table && path__csv) {
							(async ()=>{
								const response = await fetch(path__csv)
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
				}) as Promise<type__return__load__data__csv>
		}
	})(ctx)
}
export type $csv_path_type = maybe<string, null>
export type $type__path__csv = $csv_path_type
export interface csv_path_interface<I> {
	load__data__csv(opts?:Opts__load__data__csv<I>):Promise<type__return__load__data__csv>
}
export type csv_path_type<I> =
	Writable<$csv_path_type>
	&csv_path_interface<I>
export type type__path__csv<I> = csv_path_type<I>
export type type__return__load__data__csv<I extends unknown = unknown> = maybe<$table_type<I>>
