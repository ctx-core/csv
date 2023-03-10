import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { table__csv_ } from './index'
test('table__csv_', ()=>{
	equal(table__csv_({
		header_row: ['col0', 'col1', 'col2'],
		data_row_a: [
			['aaa', 'bbb', 'ccc'],
			['zzz', 'yyy', 'xxx'],
		]
	}), [
		'"col0","col1","col2"',
		'"aaa","bbb","ccc"',
		'"zzz","yyy","xxx"',
	].join('\n'))
})
test.run()
