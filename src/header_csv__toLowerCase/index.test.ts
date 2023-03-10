import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { header_csv__toLowerCase } from '../index'
test('header_csv__toLowerCase', ()=>{
	equal(header_csv__toLowerCase([
		'COL0,COL1,COL2',
		'aaa,bbb,ccc',
		'zzz,yyy,xxx',
	].join('\n')), [
		'col0,col1,col2',
		'aaa,bbb,ccc',
		'zzz,yyy,xxx',
	].join('\n'))
})
test.run()
