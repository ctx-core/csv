import { data_row_a__new, type data_row_T, header_row_, type header_row_T } from '@ctx-core/table'
import { Readable } from 'stream'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { csv__table_ } from '../index.js'
test('csv__table_|!on_data_row|string||default', ()=>{
	const header_row = header_row_(['col0', 'col1', 'col2'])
	const data_row_a = data_row_a__new([
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	], header_row)
	equal(
		csv__table_(
			[
				'col0,col1,col2',
				'aaa,bbb,ccc',
				'zzz,yyy,xxx',
				''
			].join('\n')),
		{ header_row, data_row_a })
})
test('csv__table_|!on_data_row|ReadableStream|default', async ()=>{
	const readable = new Readable()
	readable.push('col0,col1,col2\n')
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>[] = []
	for await (const [
		data_row, header_row
	] of csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(Readable.toWeb(readable))) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('csv__table_|!on_data_row|ReadableStreamDefaultReader|default', async ()=>{
	const readable = new Readable()
	readable.push('col0,col1,col2\n')
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>[] = []
	for await (const [
		data_row, header_row
	] of csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(Readable.toWeb(readable).getReader())) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('csv__table_|on_data_row|string|default', ()=>{
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>[] = []
	const ret = csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(
		(data_row, header_row)=>{
			data_row_a.push(data_row)
			header_row_a.push(header_row)
		},
		[
			'col0,col1,col2',
			'aaa,bbb,ccc',
			'zzz,yyy,xxx',
			''
		].join('\n'))
	equal(ret, undefined)
	equal([
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	], data_row_a)
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('csv__table_|on_data_row|ReadableStream|default', async ()=>{
	const readable = new Readable()
	readable.push('col0,col1,col2\n')
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>[] = []
	await csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(
		(data_row, header_row)=>{
			data_row_a.push(data_row)
			header_row_a.push(header_row)
		},
		Readable.toWeb(readable))
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('csv__table_|on_data_row|ReadableStreamDefaultReader|default', async ()=>{
	const readable = new Readable()
	readable.push('col0,col1,col2\n')
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>[] = []
	await csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(
		(data_row, header_row)=>{
			data_row_a.push(data_row)
			header_row_a.push(header_row)
		},
		Readable.toWeb(readable).getReader())
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('csv__table_|!on_data_row|string|!has_csv_header', ()=>{
	equal(
		csv__table_<
			[string, string, string]
		>(
			[
				'aaa,bbb,ccc',
				'zzz,yyy,xxx',
				''
			].join('\n'),
			false),
		{
			header_row: [0, 1, 2],
			data_row_a: [
				['aaa', 'bbb', 'ccc'],
				['zzz', 'yyy', 'xxx'],
			]
		})
})
test('csv__table_|!on_data_row|ReadableStream|!has_csv_header', async ()=>{
	const readable = new Readable()
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T[] = []
	for await (const [
		data_row, header_row
	] of csv__table_<
		[string, string, string]
	>(Readable.toWeb(readable), false)) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	])
	equal(header_row_a, [
		[0, 1, 2],
		[0, 1, 2],
	])
})
test('csv__table_|!on_data_row|ReadableStreamDefaultReader|!has_csv_header', async ()=>{
	const readable = new Readable()
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T[] = []
	for await (const [
		data_row, header_row
	] of csv__table_<
		[string, string, string]
	>(Readable.toWeb(readable).getReader(), false)) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	])
	equal(header_row_a, [
		[0, 1, 2],
		[0, 1, 2],
	])
})
test('csv__table_|on_data_row|string|!has_csv_header', ()=>{
	const data_row_a:data_row_T[] = []
	const header_row_a:header_row_T[] = []
	const ret = csv__table_<[string, string, string]>(
		(data_row, header_row)=>{
			data_row_a.push(data_row)
			header_row_a.push(header_row)
		},
		[
			'aaa,bbb,ccc',
			'zzz,yyy,xxx',
			''
		].join('\n'),
		false)
	equal(ret, undefined)
	equal([
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	], data_row_a)
	equal(header_row_a, [
		[0, 1, 2],
		[0, 1, 2],
	])
})
test('csv__table_|on_data_row|ReadableStream|!has_csv_header', async ()=>{
	const readable = new Readable()
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T[] = []
	await csv__table_<[string, string, string]>(
		(data_row, header_row)=>{
			data_row_a.push(data_row)
			header_row_a.push(header_row)
		},
		Readable.toWeb(readable),
		false)
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	])
	equal(header_row_a, [
		[0, 1, 2],
		[0, 1, 2],
	])
})
test('csv__table_|on_data_row|ReadableStreamDefaultReader|!has_csv_header', async ()=>{
	const readable = new Readable()
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T[] = []
	await csv__table_<[string, string, string]>(
		(
			data_row,
			header_row
		)=>{
			data_row_a.push(data_row)
			header_row_a.push(header_row)
		},
		Readable.toWeb(readable).getReader(),
		false)
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	])
	equal(header_row_a, [
		[0, 1, 2],
		[0, 1, 2],
	])
})
test('csv__table_|!on_data_row|string|has_csv_header', ()=>{
	equal(
		csv__table_(
			[
				'col0,col1,col2',
				'aaa,bbb,ccc',
				'zzz,yyy,xxx',
				''
			].join('\n'),
			true),
		{
			header_row: ['col0', 'col1', 'col2'],
			data_row_a: [
				['aaa', 'bbb', 'ccc'],
				['zzz', 'yyy', 'xxx'],
			]
		})
})
test('csv__table_|!on_data_row|ReadableStream|has_csv_header', async ()=>{
	const readable = new Readable()
	readable.push('col0,col1,col2\n')
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>[] = []
	for await (const [
		data_row, header_row
	] of csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(Readable.toWeb(readable), true)) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('csv__table_|!on_data_row|ReadableStreamDefaultReader|has_csv_header', async ()=>{
	const readable = new Readable()
	readable.push('col0,col1,col2\n')
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>[] = []
	for await (const [
		data_row, header_row
	] of csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(Readable.toWeb(readable).getReader(), true)) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('csv__table_|on_data_row|string|has_csv_header', ()=>{
	const data_row_a:data_row_T<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>[] = []
	const ret = csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(
		data_row=>data_row_a.push(data_row),
		[
			'col0,col1,col2',
			'aaa,bbb,ccc',
			'zzz,yyy,xxx',
			''
		].join('\n'),
		true)
	equal(ret, undefined)
	equal([
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	], data_row_a)
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
})
test('csv__table_|on_data_row|ReadableStream|has_csv_header', async ()=>{
	const readable = new Readable()
	readable.push('col0,col1,col2\n')
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>[] = []
	await csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(
		(data_row, header_row)=>{
			data_row_a.push(data_row)
			header_row_a.push(header_row)
		},
		Readable.toWeb(readable),
		true)
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('csv__table_|on_data_row|ReadableStreamDefaultReader|has_csv_header', async ()=>{
	const readable = new Readable()
	readable.push('col0,col1,col2,col3\n')
	readable.push('aaa,bbb,ccc,1.23\n')
	readable.push('zzz,yyy,xxx,3.14\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>[] = []
	await csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(
		(data_row, header_row)=>{
			data_row_a.push(data_row)
			header_row_a.push(header_row)
		},
		Readable.toWeb(readable).getReader(),
		true)
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc', 1.23],
		['zzz', 'yyy', 'xxx', 3.14],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[0].col3, 1.23)
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(data_row_a[1].col3, 3.14)
	equal(header_row_a, [
		['col0', 'col1', 'col2', 'col3'],
		['col0', 'col1', 'col2', 'col3'],
	])
})
test.run()
