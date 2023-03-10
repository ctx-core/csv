import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { row_a__csv_ } from '../index'
test('row_a__csv_', ()=>{
	equal(row_a__csv_([
		['col0', 'col1', 'col2'],
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	]), [
		'"col0","col1","col2"',
		'"aaa","bbb","ccc"',
		'"zzz","yyy","xxx"',
	].join('\n'))
})
test.run()
