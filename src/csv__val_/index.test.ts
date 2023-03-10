import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { csv__val_ } from '../index.js'
test('csv__val_', ()=>{
	equal(csv__val_(''), null)
	equal(csv__val_('null'), null)
	equal(csv__val_('undefined'), undefined)
	equal(csv__val_('true'), true)
	equal(csv__val_('false'), false)
	equal(csv__val_('2.0'), 2)
	equal(csv__val_('3.14'), 3.14)
	equal(csv__val_('3.14hoodoo'), '3.14hoodoo')
	equal(
		(csv__val_('2023-03-09T10:07:00.384Z') as Date).getTime(),
		Date.parse('2023-03-09T10:07:00.384Z'))
})
test.run()
