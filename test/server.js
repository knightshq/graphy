import test from 'ava'
import Server from '../dist/server'

test('start', t => {
	const port = 3006;
	let sv = new Server()
	console.assert(`/\\ Graphy running on port ${port}`, sv.start({ port: port }))
	sv.getInstance().close()
})

test('getInstance', t => {
	const port = 3006;
	let sv = new Server()
	sv.start({ port: port })
	t.is('function', typeof sv.getInstance().close)
	sv.getInstance().close()
})
