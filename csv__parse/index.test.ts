import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { csv__parse } from '../index.js'

test('csv__parse|callback|RFC Rule #1 - One entry per line, each line ends with a newline', ()=>{
	const row_a:string[][] = []
	csv__parse(
		row=>
			row_a.push(row),
		[
			'aaa,bbb,ccc',
			'zzz,yyy,xxx',
			''
		].join('\n'))
	equal(row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx']
	])
})
test('csv__parse|iterator|RFC Rule #1 - One entry per line, each line ends with a newline', ()=>{
	const row_a:string[][] = []
	for (const row of csv__parse([
		'aaa,bbb,ccc',
		'zzz,yyy,xxx',
		''
	].join('\n'))) {
		row_a.push(row)
	}
	equal(row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx']
	])
})
test('csv__parse|callback|RFC Rule #2 - Trailing newline at the end of the file omitted', ()=>{
	const row_a:string[][] = []
	csv__parse(
		row=>
			row_a.push(row),
		[
			'aaa,bbb,ccc',
			'zzz,yyy,xxx'
		].join('\n'))
	equal(row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx']
	])
})
test('csv__parse|iterator|RFC Rule #2 - Trailing newline at the end of the file omitted', ()=>{
	const row_a:string[][] = []
	for (const row of csv__parse([
		'aaa,bbb,ccc',
		'zzz,yyy,xxx'
	].join('\n'))) {
		row_a.push(row)
	}
	equal(row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx']
	])
})
test('csv__parse|callback|RFC Rule #3 - First row contains header data', ()=>{
	const row_a:string[][] = []
	csv__parse(
		row=>
			row_a.push(row),
		[
			'field_name,field_name,field_name',
			'aaa,bbb,ccc',
			'zzz,yyy,xxx'
		].join('\n'))
	equal(row_a, [
		['field_name', 'field_name', 'field_name'],
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx']
	])
})
test('csv__parse|iterator|RFC Rule #3 - First row contains header data', ()=>{
	const row_a:string[][] = []
	for (const row of csv__parse([
		'field_name,field_name,field_name',
		'aaa,bbb,ccc',
		'zzz,yyy,xxx'
	].join('\n'))) {
		row_a.push(row)
	}
	equal(row_a, [
		['field_name', 'field_name', 'field_name'],
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx']
	])
})
test('csv__parse|callback|RFC Rule #4 - Spaces are considered data and entries should not contain a trailing comma', ()=>{
	const row_a:string[][] = []
	csv__parse(
		row=>
			row_a.push(row),
		[
			'aaa , bbb, c  cc'
		].join('\n'))
	equal(row_a, [
		['aaa ', ' bbb', ' c  cc']
	])
})
test('csv__parse|iterator|RFC Rule #4 - Spaces are considered data and entries should not contain a trailing comma', ()=>{
	const row_a:string[][] = []
	for (const row of csv__parse([
		'aaa , bbb, c  cc'
	].join('\n'))) {
		row_a.push(row)
	}
	equal(row_a, [
		['aaa ', ' bbb', ' c  cc']
	])
})
test('csv__parse|callback|RFC Rule #5 - Lines may or may not be delimited by double-quotes', ()=>{
	const row_a:string[][] = []
	csv__parse(
		row=>
			row_a.push(row),
		[
			'"aaa","bbb","ccc"',
			'zzz,yyy,xxx'
		].join('\n'))
	equal(row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx']
	])
})
test('csv__parse|iterator|RFC Rule #5 - Lines may or may not be delimited by double-quotes', ()=>{
	const row_a:string[][] = []
	for (const row of csv__parse([
		'"aaa","bbb","ccc"',
		'zzz,yyy,xxx'
	].join('\n'))) {
		row_a.push(row)
	}
	equal(row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx']
	])
})
test('csv__parse|callback|RFC Rule #6 - Fields containing line breaks, double-quotes, and commas should be enclosed in double-quotes', ()=>{
	const row_a:string[][] = []
	csv__parse(
		row=>
			row_a.push(row),
		[
			'"a\r\naa","b""b""b","c,cc"'
		].join('\n'))
	equal(row_a, [
		['a\r\naa', 'b"b"b', 'c,cc']
	])
})
test('csv__parse|iterator|RFC Rule #6 - Fields containing line breaks, double-quotes, and commas should be enclosed in double-quotes', ()=>{
	const row_a:string[][] = []
	for (const row of csv__parse([
		'"a\r\naa","b""b""b","c,cc"'
	].join('\n'))) {
		row_a.push(row)
	}
	equal(row_a, [
		['a\r\naa', 'b"b"b', 'c,cc']
	])
})
test('csv__parse|callback|RFC Rule #7 - If double-quotes are used to enclose fields, then a double-quote appearing inside a field must be escaped by a preceding it with another double-quote', ()=>{
	const row_a:string[][] = []
	csv__parse(
		row=>
			row_a.push(row),
		[
			'aaa,"b""bb",ccc'
		].join('\n'))
	equal(row_a, [
		['aaa', 'b"bb', 'ccc']
	])
})
test('csv__parse|iterator|RFC Rule #7 - If double-quotes are used to enclose fields, then a double-quote appearing inside a field must be escaped by a preceding it with another double-quote', ()=>{
	const row_a:string[][] = []
	for (const row of csv__parse([
		'aaa,"b""bb",ccc'
	].join('\n'))) {
		row_a.push(row)
	}
	equal(row_a, [
		['aaa', 'b"bb', 'ccc']
	])
})
test('csv__parse|callback|RFC Amendment #1 - An unquoted field may contain a null (ie empty) value', ()=>{
	const row_a:string[][] = []
	csv__parse(
		row=>
			row_a.push(row),
		[
			'aaa,,ccc'
		].join('\n'))
	equal(row_a, [
		['aaa', '', 'ccc']
	])
})
test('csv__parse|iterator|RFC Amendment #1 - An unquoted field may contain a null (ie empty) value', ()=>{
	const row_a:string[][] = []
	for (const row of csv__parse([
		'aaa,,ccc'
	].join('\n'))) {
		row_a.push(row)
	}
	equal(row_a, [
		['aaa', '', 'ccc']
	])
})
test('csv__parse|callback|RFC Amendment #2 - A quoted field may contain a null (ie empty) value', ()=>{
	const row_a:string[][] = []
	csv__parse(
		row=>
			row_a.push(row),
		[
			'"aaa","","ccc"'
		].join('\n'))
	equal(row_a, [
		['aaa', '', 'ccc']
	])
})
test('csv__parse|iterator|RFC Amendment #2 - A quoted field may contain a null (ie empty) value', ()=>{
	const row_a:string[][] = []
	for (const row of csv__parse([
		'"aaa","","ccc"'
	].join('\n'))) {
		row_a.push(row)
	}
	equal(row_a, [
		['aaa', '', 'ccc']
	])
})
test('csv__parse|callback|RFC Amendment #3 - The last field in an entry may contain a null (ie empty) value', ()=>{
	const row_a:string[][] = []
	csv__parse(
		row=>
			row_a.push(row),
		[
			'"aaa","bbb",'
		].join('\n'))
	equal(row_a, [
		['aaa', 'bbb', '']
	])
})
test('csv__parse|iterator|RFC Amendment #3 - The last field in an entry may contain a null (ie empty) value', ()=>{
	const row_a:string[][] = []
	for (const row of csv__parse([
		'"aaa","bbb",'
	].join('\n'))) {
		row_a.push(row)
	}
	equal(row_a, [
		['aaa', 'bbb', '']
	])
})
test.run()
