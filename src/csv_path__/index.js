import { fetch } from '@ctx-core/fetch-undici'
import { atom_, listen_once } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
import { table__, table_domain__, ticks_domain__ } from '@ctx-core/table'
import Papa from 'papaparse'
import { cast_rows } from '../cast_rows/index.js'
import { push_row_id_i } from '../push_row_id_i/index.js'
export const csv_path__ = be_('csv_path__', (ctx)=>{
	const csv_path = atom_(null)
	return assign(csv_path, {
		load_csv_data
	})
	function load_csv_data(params = {}) {
		const csv_path = params.csv_path || csv_path__(ctx)()
		const table_ = table__(ctx)
		let table = params.table || table_()
		let table_domain = params.table_domain || table_domain__(ctx)()
		let ticks_domain = params.ticks_domain || ticks_domain__(ctx)()
		return new Promise((resolve)=>{
			// TODO: move to a web worker
			setTimeout(async ()=>{
				if (!table && csv_path) {
					const response = await fetch(csv_path)
					const text = await response.text()
					table = Papa.parse(text).data
					const columns = table[0]
					const rows = table.slice(1)
					cast_rows(rows, columns)
					push_row_id_i(rows, columns)
					table__(ctx)(table)
					table_domain__(ctx)(table_domain)
					ticks_domain__(ctx)(ticks_domain)
					// wait for events to propagate
					listen_once(table_, (table)=>resolve(table))
				}
			})
		})
	}
})
export { csv_path__ as csv_path$_ }
