import { assign, _b } from '@ctx-core/object'
import {
	$table_type, $type__domain__table,
	b__domain__table, b__domain__ticks, b__table,
} from '@ctx-core/table/store'
import { fetch } from '@ctx-core/fetch'
import Papa from 'papaparse'
import { get, writable, subscribe__change__once, Writable } from '@ctx-core/store'
import type { maybe } from '@ctx-core/function'
import { cast_rows } from './cast_rows'
import { push_row_id_i } from './push_row_id_i'
type Opts__load__data__csv<I> = {
	path__csv?:string
	table?:$table_type<I>
	domain__table?:$type__domain__table
	domain__ticks?:I[]
}
export function b__path__csv<I>(ctx?: object) {
	return _b('__path__csv', ctx=>{
		const __path__csv = writable(null) as type__path__csv<I>
		return assign(__path__csv, {
			load__data__csv,
		})
		function load__data__csv(opts = {} as Opts__load__data__csv<number>) {
			const path__csv = opts.path__csv || get(b__path__csv(ctx))
			let table = opts.table || get<$table_type<number>>(b__table(ctx))
			let domain__table =
				opts.domain__table || get<$type__domain__table>(b__domain__table(ctx))
			let domain__ticks =
				opts.domain__ticks || get<number[]>(b__domain__ticks(ctx))
			return new Promise<type__return__load__data__csv>(
				resolve=>{
					// TODO: move to a web worker
					setTimeout(()=>{
						if (!table && path__csv) {
							(async ()=>{
								const response = await fetch(path__csv)
								const text = await response.text()
								table = Papa.parse(text).data
								const columns = table[0]
								const rows = table.slice(1)
								cast_rows(rows, columns)
								push_row_id_i(rows, columns)
								b__table<number>(ctx).set(table)
								b__domain__table(ctx).set(domain__table)
								b__domain__ticks(ctx).set(domain__ticks)
								// wait for agent change events to propagate
								subscribe__change__once(b__table(ctx), resolve)
							})()
						}
					}, 0)
				})
		}
	})(ctx)
}
export type $type__path__csv = maybe<string, null>
export type type__path__csv<I> = Writable<$type__path__csv>&{
	load__data__csv(opts?:Opts__load__data__csv<I>):Promise<type__return__load__data__csv>
}
export type type__return__load__data__csv = maybe<$table_type<number>>
