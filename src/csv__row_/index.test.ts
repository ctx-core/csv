import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { csv__row_, csv__row__parse_o_ } from '../index.js'
import { data_row_T } from '@ctx-core/table'
test('csv__row_', ()=>{
	const csv__row__parse_o = csv__row__parse_o_(
		(val_a:string[])=>val_a.map($=>`---${$}`) as data_row_T<string[]>)
	equal(
		csv__row_(
			[
				'aaa,bbb,ccc',
				'zzz,yyy,xxx',
				''
			].join('\n'),
			csv__row__parse_o
		),
		[
			'---aaa',
			'---bbb',
			'---ccc'
		]
	)
})
test.run()
