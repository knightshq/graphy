import test from 'ava'
import Server from '../dist/server'

test('start', t => {
	const port = 3006;
	let sv = new Server({ port: port })
	console.assert(`/\\ Graphy running on port ${port}`, sv.start())
	sv.getInstance().close()
})

test('getInstance', t => {
	const port = 3006;
	let sv = new Server({ port: port })
	sv.start()
	t.is('function', typeof sv.getInstance().close)
	sv.getInstance().close()
})
