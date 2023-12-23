import { type data_row_T, type header_row_T } from '@ctx-core/table'
import { Readable } from 'stream'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { reader__csv__table_ } from '../index.js'
test('reader__csv__table_|!on_data_row|ReadableStream|default', async ()=>{
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
		data_row,
		header_row
	] of reader__csv__table_<[
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
test('reader__csv__table_|!on_data_row|ReadableStreamDefaultReader|default', async ()=>{
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
		data_row,
		header_row
	] of reader__csv__table_<[
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
test('reader__csv__table_|on_data_row|ReadableStream|default', async ()=>{
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
	await reader__csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(
		(
			data_row,
			header_row
		)=>{
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
test('reader__csv__table_|on_data_row|ReadableStreamDefaultReader|default', async ()=>{
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
	await reader__csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(
		(
			data_row,
			header_row
		)=>{
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
test('reader__csv__table_|!on_data_row|ReadableStream|!has_csv_header|default', async ()=>{
	const readable = new Readable()
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T[] = []
	for await (const [
		data_row,
		header_row
	] of reader__csv__table_<
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
test('reader__csv__table_|!on_data_row|ReadableStream|!has_csv_header|+ val__hydrate', async ()=>{
	const readable = new Readable()
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T[] = []
	for await (const [
		data_row,
		header_row
	] of reader__csv__table_<
		[string, string, string]
	>(
		Readable.toWeb(readable),
		false,
		(
			val,
			header
		)=>
			`${val}--${header}--`
	)) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa--0--', 'bbb--1--', 'ccc--2--'],
		['zzz--0--', 'yyy--1--', 'xxx--2--'],
	])
	equal(header_row_a, [
		[0, 1, 2],
		[0, 1, 2],
	])
})
test('reader__csv__table_|!on_data_row|ReadableStreamDefaultReader|!has_csv_header|default', async ()=>{
	const readable = new Readable()
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T[] = []
	for await (const [
		data_row,
		header_row
	] of reader__csv__table_<
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
test('reader__csv__table_|!on_data_row|ReadableStreamDefaultReader|!has_csv_header|+ val__hydrate', async ()=>{
	const readable = new Readable()
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T[] = []
	for await (const [
		data_row,
		header_row
	] of reader__csv__table_<
		[string, string, string]
	>(
		Readable.toWeb(readable).getReader(),
		false,
		(
			val,
			header
		)=>
			`${val}--${header}--`
	)) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa--0--', 'bbb--1--', 'ccc--2--'],
		['zzz--0--', 'yyy--1--', 'xxx--2--'],
	])
	equal(header_row_a, [
		[0, 1, 2],
		[0, 1, 2],
	])
})
test('reader__csv__table_|on_data_row|ReadableStream|!has_csv_header|default', async ()=>{
	const readable = new Readable()
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T[] = []
	await reader__csv__table_<
		[string, string, string]
	>(
		(
			data_row,
			header_row
		)=>{
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
test('reader__csv__table_|on_data_row|ReadableStream|!has_csv_header|+ val__hydrate', async ()=>{
	const readable = new Readable()
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T[] = []
	await reader__csv__table_<
		[string, string, string]
	>(
		(
			data_row,
			header_row
		)=>{
			data_row_a.push(data_row)
			header_row_a.push(header_row)
		},
		Readable.toWeb(readable),
		false,
		(
			val,
			header
		)=>
			`${val}--${header}--`)
	equal(data_row_a, [
		['aaa--0--', 'bbb--1--', 'ccc--2--'],
		['zzz--0--', 'yyy--1--', 'xxx--2--'],
	])
	equal(header_row_a, [
		[0, 1, 2],
		[0, 1, 2],
	])
})
test('reader__csv__table_|on_data_row|ReadableStreamDefaultReader|!has_csv_header|default', async ()=>{
	const readable = new Readable()
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T<[string, string, string]>[] = []
	await reader__csv__table_<[string, string, string]>(
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
test('reader__csv__table_|on_data_row|ReadableStreamDefaultReader|!has_csv_header|+ val__hydrate', async ()=>{
	const readable = new Readable()
	readable.push('aaa,bbb,ccc\n')
	readable.push('zzz,yyy,xxx\n')
	readable.push('\n')
	readable.push(null)
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T<[string, string, string]>[] = []
	await reader__csv__table_<[string, string, string]>(
		(
			data_row,
			header_row
		)=>{
			data_row_a.push(data_row)
			header_row_a.push(header_row)
		},
		Readable.toWeb(readable).getReader(),
		false,
		(
			val,
			header
		)=>
			`${val}--${header}--`)
	equal(data_row_a, [
		['aaa--0--', 'bbb--1--', 'ccc--2--'],
		['zzz--0--', 'yyy--1--', 'xxx--2--'],
	])
	equal(header_row_a, [
		[0, 1, 2],
		[0, 1, 2],
	])
})
test('reader__csv__table_|!on_data_row|ReadableStream|has_csv_header|default', async ()=>{
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
		data_row,
		header_row
	] of reader__csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(
		Readable.toWeb(readable),
		true,
		(
			val,
			header
		)=>
			`${val}--${header}--`
	)) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa--col0--', 'bbb--col1--', 'ccc--col2--'],
		['zzz--col0--', 'yyy--col1--', 'xxx--col2--'],
	])
	equal(data_row_a[0].col0, 'aaa--col0--')
	equal(data_row_a[0].col1, 'bbb--col1--')
	equal(data_row_a[0].col2, 'ccc--col2--')
	equal(data_row_a[1].col0, 'zzz--col0--')
	equal(data_row_a[1].col1, 'yyy--col1--')
	equal(data_row_a[1].col2, 'xxx--col2--')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('reader__csv__table_|!on_data_row|ReadableStream|has_csv_header|+ val__hydrate', async ()=>{
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
		data_row,
		header_row
	] of reader__csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(
		Readable.toWeb(readable),
		true,
		(
			val,
			header,
		)=>`${val}--${header}--`
	)) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa--col0--', 'bbb--col1--', 'ccc--col2--'],
		['zzz--col0--', 'yyy--col1--', 'xxx--col2--'],
	])
	equal(data_row_a[0].col0, 'aaa--col0--')
	equal(data_row_a[0].col1, 'bbb--col1--')
	equal(data_row_a[0].col2, 'ccc--col2--')
	equal(data_row_a[1].col0, 'zzz--col0--')
	equal(data_row_a[1].col1, 'yyy--col1--')
	equal(data_row_a[1].col2, 'xxx--col2--')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('reader__csv__table_|!on_data_row|ReadableStreamDefaultReader|has_csv_header|default', async ()=>{
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
		data_row,
		header_row
	] of reader__csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(
		Readable.toWeb(readable).getReader(),
		true,
		(
			val,
			header
		)=>
			`${val}--${header}--`
	)) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa--col0--', 'bbb--col1--', 'ccc--col2--'],
		['zzz--col0--', 'yyy--col1--', 'xxx--col2--'],
	])
	equal(data_row_a[0].col0, 'aaa--col0--')
	equal(data_row_a[0].col1, 'bbb--col1--')
	equal(data_row_a[0].col2, 'ccc--col2--')
	equal(data_row_a[1].col0, 'zzz--col0--')
	equal(data_row_a[1].col1, 'yyy--col1--')
	equal(data_row_a[1].col2, 'xxx--col2--')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('reader__csv__table_|on_data_row|ReadableStream|has_csv_header|default', async ()=>{
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
	await reader__csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(
		(
			data_row,
			header_row
		)=>{
			data_row_a.push(data_row)
			header_row_a.push(header_row)
		},
		Readable.toWeb(readable),
		true,
		(
			val,
			header
		)=>
			`${val}--${header}--`)
	equal(data_row_a, [
		['aaa--col0--', 'bbb--col1--', 'ccc--col2--'],
		['zzz--col0--', 'yyy--col1--', 'xxx--col2--'],
	])
	equal(data_row_a[0].col0, 'aaa--col0--')
	equal(data_row_a[0].col1, 'bbb--col1--')
	equal(data_row_a[0].col2, 'ccc--col2--')
	equal(data_row_a[1].col0, 'zzz--col0--')
	equal(data_row_a[1].col1, 'yyy--col1--')
	equal(data_row_a[1].col2, 'xxx--col2--')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('reader__csv__table_|on_data_row|ReadableStreamDefaultReader|has_csv_header|default', async ()=>{
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
	await reader__csv__table_<[
		['col0', string],
		['col1', string],
		['col2', string],
	]>(
		(
			data_row,
			header_row
		)=>{
			data_row_a.push(data_row)
			header_row_a.push(header_row)
		},
		Readable.toWeb(readable).getReader(),
		true,
		(
			val,
			header
		)=>
			`${val}--${header}--`)
	equal(data_row_a, [
		['aaa--col0--', 'bbb--col1--', 'ccc--col2--'],
		['zzz--col0--', 'yyy--col1--', 'xxx--col2--'],
	])
	equal(data_row_a[0].col0, 'aaa--col0--')
	equal(data_row_a[0].col1, 'bbb--col1--')
	equal(data_row_a[0].col2, 'ccc--col2--')
	equal(data_row_a[1].col0, 'zzz--col0--')
	equal(data_row_a[1].col1, 'yyy--col1--')
	equal(data_row_a[1].col2, 'xxx--col2--')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test.run()
