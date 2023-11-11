import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { csv__header_row_, csv__parse_o_ } from '../index.js'
test('csv__header_row_', ()=>{
	const csv__parse_o = csv__parse_o_()
	equal(
		csv__header_row_(
			[
				'col0,col1,col2',
				'aaa,bbb,ccc',
				'zzz,yyy,xxx',
				''
			].join('\n'),
			csv__parse_o),
		['col0', 'col1', 'col2'])
})
test.run()
