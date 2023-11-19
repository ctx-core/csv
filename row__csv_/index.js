import { isArray } from '@ctx-core/function'
import { keys } from '@ctx-core/object'

/**
 * @param {unknown[]|object}row
 * @param {import('../_types/index.js').row__csv___params_T}[params]
 * @returns {string}
 * @private
 */
export function row__csv_(
	row,
	params = {}
) {
	const delimiter =
        params.delimiter
        || ','
	return (
		(
			isArray(row)
				? row
				: (params?.header_row || keys(row))
					.map(key=>
						row[key])
		).map($=>
			`"${
				$ == null
					? ''
					: $.toString().replaceAll('"', '""')
			}"`
		).join(delimiter))
}
