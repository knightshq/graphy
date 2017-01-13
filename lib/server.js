import http from 'http'
import Schema from './schema'

//base class with Server implementation
export default class Server {
	port = 3000 || process.env.PORT
	svInstance = null

	constructor () {

	}
	//get server svInstance
	getInstance () {
		if(this.svInstance) {
			return this.svInstance
		}
		return
	}
	//server start
	start (opts) {
		if(opts.port) {
			this.port = opts.port
		}

		const sv = http.createServer((req, res) => {
			//
		})
		this.svInstance = sv
		sv.on('request', (req, res) => {
			console.log('got it')
		})
		sv.listen(this.port, () => {
			console.log(`/\\ Graphy running on port ${this.port}`)
			this.svInstance = sv
		})
	}
	get () {

	}
	close () {
		if(this.svInstance) {
			this.svInstance.close()
			this.svInstance = null
		}
	}
}
