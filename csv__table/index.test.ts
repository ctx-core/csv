import { data_row_a__new, type data_row_T, header_row_, type header_row_T } from '@ctx-core/table'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { csv__table_ } from '../index.js'

test('csv__table_|!on_data_row|string||default', ()=>{
	const header_row =
        header_row_(['col0', 'col1', 'col2'])
	const data_row_a =
        data_row_a__new([
        	['aaa', 'bbb', 'ccc'],
        	['zzz', 'yyy', 'xxx'],
        	['the', 'last', 'line'],
        ], header_row)
	equal(
		csv__table_(
			[
				'col0,col1,col2',
				'aaa,bbb,ccc',
				'zzz,yyy,xxx',
				'the,last,line',
				''
			].join('\n')),
		{ header_row, data_row_a })
})
test('csv__table_|!on_data_row|ReadableStream|default', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('col0,col1,col2\n')
			controller.enqueue('aaa,bbb,ccc\n')
			controller.enqueue('zzz,yyy,xxx\n')
			controller.enqueue('\n')
		},
		pull(controller) {
			controller.enqueue('the,last,line')
			controller.close()
		}
	})
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T<[
        ['col0', string],
        ['col1', string],
        ['col2', string],
    ]>[] = []
	for await (const [
		data_row,
		header_row
	] of csv__table_<[
        ['col0', string],
        ['col1', string],
        ['col2', string],
    ]>(readable_stream)) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
		['the', 'last', 'line'],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(data_row_a[2].col0, 'the')
	equal(data_row_a[2].col1, 'last')
	equal(data_row_a[2].col2, 'line')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('csv__table_|!on_data_row|ReadableStreamDefaultReader|default', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('col0,col1,col2\n')
			controller.enqueue('aaa,bbb,ccc\n')
			controller.enqueue('zzz,yyy,xxx\n')
			controller.enqueue('\n')
		},
		pull(controller) {
			controller.enqueue('the,last,line')
			controller.close()
		}
	})
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T<[
        ['col0', string],
        ['col1', string],
        ['col2', string],
    ]>[] = []
	for await (const [
		data_row,
		header_row
	] of csv__table_<[
        ['col0', string],
        ['col1', string],
        ['col2', string],
    ]>(readable_stream.getReader())) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
		['the', 'last', 'line'],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(data_row_a[2].col0, 'the')
	equal(data_row_a[2].col1, 'last')
	equal(data_row_a[2].col2, 'line')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
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
	csv__table_<[
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
    	[
    		'col0,col1,col2',
    		'aaa,bbb,ccc',
    		'zzz,yyy,xxx',
    		'the,last,line',
    		''
    	].join('\n'))
	equal([
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
		['the', 'last', 'line'],
	], data_row_a)
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(data_row_a[2].col0, 'the')
	equal(data_row_a[2].col1, 'last')
	equal(data_row_a[2].col2, 'line')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('csv__table_|on_data_row|ReadableStream|default', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('col0,col1,col2\n')
			controller.enqueue('aaa,bbb,ccc\n')
			controller.enqueue('zzz,yyy,xxx\n')
			controller.enqueue('\n')
		},
		pull(controller) {
			controller.enqueue('the,last,line')
			controller.close()
		}
	})
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
    	(
    		data_row,
    		header_row
    	)=>{
    		data_row_a.push(data_row)
    		header_row_a.push(header_row)
    	},
    	readable_stream)
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
		['the', 'last', 'line'],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(data_row_a[2].col0, 'the')
	equal(data_row_a[2].col1, 'last')
	equal(data_row_a[2].col2, 'line')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('csv__table_|on_data_row|ReadableStreamDefaultReader|default', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('col0,col1,col2\n')
			controller.enqueue('aaa,bbb,ccc\n')
			controller.enqueue('zzz,yyy,xxx\n')
			controller.enqueue('\n')
		},
		pull(controller) {
			controller.enqueue('the,last,line')
			controller.close()
		}
	})
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
    	(
    		data_row,
    		header_row
    	)=>{
    		data_row_a.push(data_row)
    		header_row_a.push(header_row)
    	},
    	readable_stream.getReader())
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
		['the', 'last', 'line'],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(data_row_a[2].col0, 'the')
	equal(data_row_a[2].col1, 'last')
	equal(data_row_a[2].col2, 'line')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
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
        		'the,last,line',
        		''
        	].join('\n'),
        	false),
		{
			header_row: [0, 1, 2],
			data_row_a: [
				['aaa', 'bbb', 'ccc'],
				['zzz', 'yyy', 'xxx'],
				['the', 'last', 'line'],
			]
		})
})
test('csv__table_|!on_data_row|ReadableStream|!has_csv_header', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('aaa,bbb,ccc\n')
			controller.enqueue('zzz,yyy,xxx\n')
			controller.enqueue('\n')
		},
		pull(controller) {
			controller.enqueue('the,last,line')
			controller.close()
		}
	})
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T[] = []
	for await (const [
		data_row,
		header_row
	] of csv__table_<
        [string, string, string]
    >(readable_stream, false)) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
		['the', 'last', 'line'],
	])
	equal(header_row_a, [
		[0, 1, 2],
		[0, 1, 2],
		[0, 1, 2],
	])
})
test('csv__table_|!on_data_row|ReadableStreamDefaultReader|!has_csv_header', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('aaa,bbb,ccc\n')
			controller.enqueue('zzz,yyy,xxx\n')
		},
		pull(controller) {
			controller.enqueue('the,last,line')
			controller.close()
		}
	})
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T[] = []
	for await (const [
		data_row,
		header_row
	] of csv__table_<
        [string, string, string]
    >(readable_stream.getReader(), false)) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
		['the', 'last', 'line'],
	])
	equal(header_row_a, [
		[0, 1, 2],
		[0, 1, 2],
		[0, 1, 2],
	])
})
test('csv__table_|on_data_row|string|!has_csv_header', ()=>{
	const data_row_a:data_row_T[] = []
	const header_row_a:header_row_T[] = []
	csv__table_<[string, string, string]>(
		(
			data_row,
			header_row
		)=>{
			data_row_a.push(data_row)
			header_row_a.push(header_row)
		},
		[
			'aaa,bbb,ccc',
			'zzz,yyy,xxx',
			'the,last,line',
			''
		].join('\n'),
		false)
	equal([
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
		['the', 'last', 'line'],
	], data_row_a)
	equal(header_row_a, [
		[0, 1, 2],
		[0, 1, 2],
		[0, 1, 2],
	])
})
test('csv__table_|on_data_row|ReadableStream|!has_csv_header', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('aaa,bbb,ccc\n')
			controller.enqueue('zzz,yyy,xxx\n')
		},
		pull(controller) {
			controller.enqueue('the,last,line')
			controller.close()
		}
	})
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
		readable_stream,
		false)
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
		['the', 'last', 'line'],
	])
	equal(header_row_a, [
		[0, 1, 2],
		[0, 1, 2],
		[0, 1, 2],
	])
})
test('csv__table_|on_data_row|ReadableStreamDefaultReader|!has_csv_header', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('aaa,bbb,ccc\n')
			controller.enqueue('zzz,yyy,xxx\n')
		},
		pull(controller) {
			controller.enqueue('the,last,line')
			controller.close()
		}
	})
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
		readable_stream.getReader(),
		false)
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
		['the', 'last', 'line'],
	])
	equal(header_row_a, [
		[0, 1, 2],
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
				'the,last,line',
				''
			].join('\n'),
			true),
		{
			header_row: ['col0', 'col1', 'col2'],
			data_row_a: [
				['aaa', 'bbb', 'ccc'],
				['zzz', 'yyy', 'xxx'],
				['the', 'last', 'line'],
			]
		})
})
test('csv__table_|!on_data_row|ReadableStream|has_csv_header', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('col0,col1,col2\n')
			controller.enqueue('aaa,bbb,ccc\n')
			controller.enqueue('zzz,yyy,xxx\n')
		},
		pull(controller) {
			controller.enqueue('the,last,line')
			controller.close()
		}
	})
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T<[
        ['col0', string],
        ['col1', string],
        ['col2', string],
    ]>[] = []
	for await (const [
		data_row,
		header_row
	] of csv__table_<[
        ['col0', string],
        ['col1', string],
        ['col2', string],
    ]>(readable_stream, true)) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
		['the', 'last', 'line'],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(data_row_a[2].col0, 'the')
	equal(data_row_a[2].col1, 'last')
	equal(data_row_a[2].col2, 'line')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('csv__table_|!on_data_row|ReadableStreamDefaultReader|has_csv_header', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('col0,col1,col2\n')
			controller.enqueue('aaa,bbb,ccc\n')
			controller.enqueue('zzz,yyy,xxx\n')
		},
		pull(controller) {
			controller.enqueue('the,last,line')
			controller.close()
		}
	})
	const header_row_a:header_row_T[] = []
	const data_row_a:data_row_T<[
        ['col0', string],
        ['col1', string],
        ['col2', string],
    ]>[] = []
	for await (const [
		data_row,
		header_row
	] of csv__table_<[
        ['col0', string],
        ['col1', string],
        ['col2', string],
    ]>(readable_stream.getReader(), true)) {
		data_row_a.push(data_row)
		header_row_a.push(header_row)
	}
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
		['the', 'last', 'line'],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(data_row_a[2].col0, 'the')
	equal(data_row_a[2].col1, 'last')
	equal(data_row_a[2].col2, 'line')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
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
	csv__table_<[
        ['col0', string],
        ['col1', string],
        ['col2', string],
    ]>(
    	data_row=>
    		data_row_a.push(data_row),
    	[
    		'col0,col1,col2',
    		'aaa,bbb,ccc',
    		'zzz,yyy,xxx',
    		'the,last,line',
    		''
    	].join('\n'),
    	true)
	equal([
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
		['the', 'last', 'line'],
	], data_row_a)
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(data_row_a[2].col0, 'the')
	equal(data_row_a[2].col1, 'last')
	equal(data_row_a[2].col2, 'line')
})
test('csv__table_|on_data_row|ReadableStream|has_csv_header', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('col0,col1,col2\n')
			controller.enqueue('aaa,bbb,ccc\n')
			controller.enqueue('zzz,yyy,xxx\n')
		},
		pull(controller) {
			controller.enqueue('the,last,line')
			controller.close()
		}
	})
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
    	(
    		data_row,
    		header_row
    	)=>{
    		data_row_a.push(data_row)
    		header_row_a.push(header_row)
    	},
    	readable_stream,
    	true)
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc'],
		['zzz', 'yyy', 'xxx'],
		['the', 'last', 'line'],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(data_row_a[2].col0, 'the')
	equal(data_row_a[2].col1, 'last')
	equal(data_row_a[2].col2, 'line')
	equal(header_row_a, [
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
		['col0', 'col1', 'col2'],
	])
})
test('csv__table_|on_data_row|ReadableStreamDefaultReader|has_csv_header', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('col0,col1,col2,col3\n')
			controller.enqueue('aaa,bbb,ccc,1.23\n')
			controller.enqueue('zzz,yyy,xxx,3.14\n')
		},
		pull(controller) {
			controller.enqueue('the,last,line,99.9')
			controller.close()
		}
	})
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
    	(
    		data_row,
    		header_row
    	)=>{
    		data_row_a.push(data_row)
    		header_row_a.push(header_row)
    	},
    	readable_stream.getReader(),
    	true)
	equal(data_row_a, [
		['aaa', 'bbb', 'ccc', 1.23],
		['zzz', 'yyy', 'xxx', 3.14],
		['the', 'last', 'line', 99.9],
	])
	equal(data_row_a[0].col0, 'aaa')
	equal(data_row_a[0].col1, 'bbb')
	equal(data_row_a[0].col2, 'ccc')
	equal(data_row_a[0].col3, 1.23)
	equal(data_row_a[1].col0, 'zzz')
	equal(data_row_a[1].col1, 'yyy')
	equal(data_row_a[1].col2, 'xxx')
	equal(data_row_a[1].col3, 3.14)
	equal(data_row_a[2].col0, 'the')
	equal(data_row_a[2].col1, 'last')
	equal(data_row_a[2].col2, 'line')
	equal(data_row_a[2].col3, 99.9)
	equal(header_row_a, [
		['col0', 'col1', 'col2', 'col3'],
		['col0', 'col1', 'col2', 'col3'],
		['col0', 'col1', 'col2', 'col3'],
	])
})
test.run()
