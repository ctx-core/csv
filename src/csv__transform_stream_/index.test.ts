import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { csv__transform_stream_ } from '../index.js'
test('csv__transform_stream_|default', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('col0,col1,col2\n')
			controller.enqueue('aaa,bbb,')
			controller.enqueue('ccc\n')
			controller.enqueue('zzz,yyy,xxx\n')
			controller.enqueue('\n')
		},
		pull(controller) {
			controller.enqueue('the,last,line')
			controller.close()
		}
	})
	const csv__transform_stream =
		csv__transform_stream_<[
			['col0', string],
			['col1', string],
			['col2', string],
		]>()
	const reader =
		readable_stream.pipeThrough(csv__transform_stream).getReader()
	const read_result_0 =
		await reader.read()
	equal(read_result_0, {
		value: [
			['aaa', 'bbb', 'ccc'],
			['col0', 'col1', 'col2']
		], done: false
	})
	equal(read_result_0.value![0].col0, 'aaa')
	equal(read_result_0.value![0].col1, 'bbb')
	equal(read_result_0.value![0].col2, 'ccc')
	const read_result_1 =
		await reader.read()
	equal(read_result_1, {
		value: [
			['zzz', 'yyy', 'xxx'],
			['col0', 'col1', 'col2']
		], done: false
	})
	equal(read_result_1.value![0].col0, 'zzz')
	equal(read_result_1.value![0].col1, 'yyy')
	equal(read_result_1.value![0].col2, 'xxx')
	const read_result_2 =
		await reader.read()
	equal(read_result_2, {
		value: [
			['the', 'last', 'line'],
			['col0', 'col1', 'col2']
		], done: false
	})
	equal(read_result_2.value![0].col0, 'the')
	equal(read_result_2.value![0].col1, 'last')
	equal(read_result_2.value![0].col2, 'line')
	equal(await reader.read(), { value: undefined, done: true })
})
test('csv__transform_stream_|!has_csv_header', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('aaa,bbb,')
			controller.enqueue('ccc\n')
			controller.enqueue('zzz,yyy,xxx\n')
			controller.enqueue('\n')
		},
		pull(controller) {
			controller.enqueue('the,last,line')
			controller.close()
		}
	})
	const csv__transform_stream =
		csv__transform_stream_<
			[string, string, string]
		>({ has_csv_header: false })
	const reader =
		readable_stream.pipeThrough(csv__transform_stream).getReader()
	equal(await reader.read(), {
		value: [
			['aaa', 'bbb', 'ccc'],
			[0, 1, 2],
		],
		done: false
	})
	equal(await reader.read(), {
		value: [
			['zzz', 'yyy', 'xxx'],
			[0, 1, 2],
		],
		done: false
	})
	equal(await reader.read(), {
		value: [
			['the', 'last', 'line'],
			[0, 1, 2],
		],
		done: false
	})
	equal(await reader.read(), {
		value: undefined,
		done: true
	})
})
test('csv__transform_stream_|has_csv_header', async ()=>{
	const readable_stream = new ReadableStream({
		start(controller) {
			controller.enqueue('col0,col1,col2\n')
			controller.enqueue('aaa,bbb,')
			controller.enqueue('ccc\n')
			controller.enqueue('zzz,yyy,xxx\n')
			controller.enqueue('\n')
		},
		pull(controller) {
			controller.enqueue('the,last,line')
			controller.close()
		}
	})
	const csv__transform_stream =
		csv__transform_stream_<[
			['col0', string],
			['col1', string],
			['col2', string],
		]>({ has_csv_header: true })
	const reader =
		readable_stream.pipeThrough(csv__transform_stream).getReader()
	const read_result_0 =
		await reader.read()
	equal(read_result_0, {
		value: [
			['aaa', 'bbb', 'ccc'],
			['col0', 'col1', 'col2']
		], done: false
	})
	equal(read_result_0.value![0].col0, 'aaa')
	equal(read_result_0.value![0].col1, 'bbb')
	equal(read_result_0.value![0].col2, 'ccc')
	const read_result_1 =
		await reader.read()
	equal(read_result_1, {
		value: [
			['zzz', 'yyy', 'xxx'],
			['col0', 'col1', 'col2']
		], done: false
	})
	equal(read_result_1.value![0].col0, 'zzz')
	equal(read_result_1.value![0].col1, 'yyy')
	equal(read_result_1.value![0].col2, 'xxx')
	const read_result_2 =
		await reader.read()
	equal(read_result_2, {
		value: [
			['the', 'last', 'line'],
			['col0', 'col1', 'col2']
		], done: false
	})
	equal(read_result_2.value![0].col0, 'the')
	equal(read_result_2.value![0].col1, 'last')
	equal(read_result_2.value![0].col2, 'line')
	equal(await reader.read(), { value: undefined, done: true })
})
test.run()
