import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { csv__table_, row__csv_ } from '../index.js'

test('row__csv_', ()=>{
	equal(row__csv_(['aaa', 'bbb', 'ccc', JSON.stringify(['zzz', 'yyy', 'xxx'])]), [
		'"aaa","bbb","ccc","[""zzz"",""yyy"",""xxx""]"'
	].join('\n'))
	const table = csv__table_(
		`col0,col1,col2,col3\n${
			row__csv_(
				['aaa', 'bbb', 'ccc', JSON.stringify(['zzz', 'yyy', 'xxx'])])
		}`,
		true,
		(val, header)=>
			header === 'col3'
				? JSON.parse(val as string)
				: val)
	equal(table.header_row, ['col0', 'col1', 'col2', 'col3'])
	equal(table.data_row_a, [
		['aaa', 'bbb', 'ccc', ['zzz', 'yyy', 'xxx']]
	])
})
test.run()
