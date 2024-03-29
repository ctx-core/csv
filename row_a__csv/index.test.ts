import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { row_a__csv_ } from '../index.js'

test('row_a__csv_|-params', ()=>{
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
test('row_a__csv_|+params', ()=>{
	equal(row_a__csv_([
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	], {
		delimiter: '|',
		header_row: ['col0', 'col1', 'col2'],
	}), [
		'"col0"|"col1"|"col2"',
		'"aaa"|"bbb"|"ccc"',
		'"zzz"|"yyy"|"xxx"',
	].join('\n'))
})
test.run()
