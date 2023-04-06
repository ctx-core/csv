import { header_M_col_idx__new, header_row__new } from '@ctx-core/table'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { csv__data_row_, csv__data_row__parse_o_ } from '../index'
test('csv__data_row_', ()=>{
	const header_row =
		header_row__new<[
			['col0', string],
			['col1', string],
			['col2', string],
		]>(['col0', 'col1', 'col2'])
	const header_M_col_idx =
		header_M_col_idx__new<[
			['col0', string],
			['col1', string],
			['col2', string],
		]>(header_row)
	const csv__data_row__parse_o = csv__data_row__parse_o_(header_M_col_idx)
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
