import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { header_M_row_idx__new } from '@ctx-core/table'
import { csv__data_row_, csv__data_row__parse_o_ } from '../index'
test('csv__data_row_', ()=>{
	const header_M_row_idx =
		header_M_row_idx__new<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(['col0', 'col1', 'col2'])
	const csv__data_row__parse_o = csv__data_row__parse_o_(header_M_row_idx)
	const csv__data_row = csv__data_row_(
		[
			'aaa,bbb,ccc',
			'zzz,yyy,xxx',
			''
		].join('\n'),
		csv__data_row__parse_o)
	equal(csv__data_row, ['aaa', 'bbb', 'ccc'])
	equal(csv__data_row.col0, 'aaa')
	equal(csv__data_row.col1, 'bbb')
	equal(csv__data_row.col2, 'ccc')
})
test.run()
