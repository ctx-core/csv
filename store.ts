import { get, writable } from 'svelte/store'
import { assign, _b } from '@ctx-core/object'
import {
	b__domain__table,
	b__domain__ticks,
	b__table,
} from '@ctx-core/table/store'
import { fetch } from '@ctx-core/fetch'
import Papa from 'papaparse'
import { subscribe__change__once } from '@ctx-core/store'
import {
	cast__rows,
	push__row_id__i,
} from './lib'
import { info, log } from '@ctx-core/logger'
const logPrefix = '@ctx-core/csv/store.js'
type Opts__load__data__csv = {
	path__csv?:string
	table?:[][]
	domain__table?:[][]
	domain__ticks?:[]
}
export const b__path__csv = _b('__path__csv', ctx=>{
	const __path__csv = writable(null)
	return assign(__path__csv, {
		load__data__csv,
	})
	function load__data__csv(opts:Opts__load__data__csv = {}) {
		log(`${logPrefix}|load__data__csv`)
		const path__csv = opts.path__csv || get(b__path__csv(ctx))
		let table = opts.table || get(b__table(ctx))
		let domain__table =
			opts.domain__table || get(b__domain__table(ctx))
		let domain__ticks =
			opts.domain__ticks || get(b__domain__ticks(ctx))
		return new Promise(
			resolve=>{
				log(`${logPrefix}|load__data__csv|Promise`)
				// TODO: move to a web worker
				setTimeout(()=>{
					info(`${logPrefix}|load__data__csv|Promise|setTimeout`)
					if (!table && path__csv) {
						(async ()=>{
							log(`${logPrefix}|load__data__csv|Promise|setTimeout|path__csv`, path__csv)
							const response = await fetch(path__csv)
							const text = await response.text()
							table = Papa.parse(text).data
							const columns = table[0]
							const rows = table.slice(1)
							cast__rows(rows, columns)
							push__row_id__i(rows, columns)
							b__table(ctx).set(table)
							b__domain__table(ctx).set(domain__table)
							b__domain__ticks(ctx).set(domain__ticks)
							// wait for agent change events to propagate
							subscribe__change__once(b__table(ctx), resolve)
						})()
					}
				}, 0)
			})
	}
})
