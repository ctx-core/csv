import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { csv_val__hydrate } from '../index.js'
test('csv_val__hydrate', ()=>{
	equal(csv_val__hydrate(''), null)
	equal(csv_val__hydrate('null'), null)
	equal(csv_val__hydrate('undefined'), undefined)
	equal(csv_val__hydrate('true'), true)
	equal(csv_val__hydrate('false'), false)
	equal(csv_val__hydrate('2.0'), 2)
	equal(csv_val__hydrate('3.14'), 3.14)
	equal(csv_val__hydrate('3.14hoodoo'), '3.14hoodoo')
	equal(
		csv_val__hydrate('2023-03-09T10:07:00.384Z'),
		'2023-03-09T10:07:00.384Z')
})
test.run()
