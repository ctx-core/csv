import { fetch } from '@ctx-core/fetch-undici'
import { listen_once } from '@ctx-core/nanostores'
import { table__ } from '@ctx-core/table'
import { row_a__cast } from '../row_a__cast/index.js'
import { csv_path__ } from '../csv_path__/index.js'
import { row_a__row_id_i__push } from '../row_a__row_id_i__push/index.js'
/**
 * @param {import('./index.d.ts').csv__fetch_get__params_T}params
 * @returns {Promise<unknown>}
 */
export function csv__fetch_get(params = {}) {
	const csv_path = params.csv_path || csv_path__(ctx)()
	const table_ = table__(ctx)
	let table = params.table || table_()
	return new Promise((resolve)=>{
		// TODO: move to a web worker
		setTimeout(async ()=>{
			if (!table && csv_path) {
				const response = await fetch(csv_path)
				response.body.getReader()
				const text = await response.text()
				table = Papa.parse(text).data
				const column_a = table[0]
				const row_a = table.slice(1)
				row_a__cast(row_a, column_a)
				row_a__row_id_i__push(row_a, column_a)
				table__(ctx)(table)
				// wait for events to propagate
				listen_once(table_, table=>
					resolve(table))
			}
		})
	})
}
