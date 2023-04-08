import { Readable } from 'stream'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { is_readable_stream_OR_reader_ } from '../index'
test('is_readable_stream_OR_reader_', ()=>{
	equal(is_readable_stream_OR_reader_(1), false)
	equal(is_readable_stream_OR_reader_('foobar'), false)
	equal(is_readable_stream_OR_reader_(null), false)
	equal(is_readable_stream_OR_reader_(Readable.toWeb(new Readable())), true)
	equal(is_readable_stream_OR_reader_(Readable.toWeb(new Readable()).getReader()), true)
})
test.run()
