import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { table__csv_ } from './index'
import { data_row_a__new, header_row__new } from '@ctx-core/table'
test('table__csv_', ()=>{
	const header_row =
		header_row__new(['col0', 'col1', 'col2'])
	const data_row_a =
		data_row_a__new([
			['aaa', 'bbb', 'ccc'],
			['zzz', 'yyy', 'xxx'],
		], header_row)
	equal(table__csv_({
		header_row,
		data_row_a
	}), [
		'"col0","col1","col2"',
		'"aaa","bbb","ccc"',
		'"zzz","yyy","xxx"',
	].join('\n'))
})
test.run()
