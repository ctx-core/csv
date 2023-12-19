/// <reference types="../types/index.d.ts" />
import { header_row__new } from '@ctx-core/table'
import { I } from 'ctx-core/combinators'
import { csv__parse, csv__parse_o_ } from '../csv__parse/index.js'
/** @typedef {import('@ctx-core/table').header_row_T} */
/** @typedef {csv__parse_o_T} */
/**
 * @param {string}csv
 * @param {csv__parse_o_T}csv__parse_o
 * @returns {header_row_T}
 * @private
 */
export function csv__header_row_(
	csv,
	csv__parse_o
) {
	const revert__val_ = csv__parse_o.val__hydrate
	try {
		csv__parse_o.val__hydrate = I
		for (const val_a of csv__parse(csv, csv__parse_o)) {
 			return header_row__new(val_a)
		}
	} finally {
		csv__parse_o_.val_ = revert__val_
	}
}
