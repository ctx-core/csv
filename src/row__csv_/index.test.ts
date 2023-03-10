import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { row__csv_ } from './index'
test('row__csv_', ()=>{
	equal(row__csv_(['aaa', 'bbb', 'ccc']), [
		'"aaa","bbb","ccc"'
	].join('\n'))
})
test.run()
