import http from 'http'

export default class Server {
	port = 3000 || process.env.PORT
	instance = null

	constructor() {

	}
	//get server instance
	getInstance() {
		if(this.instance) {
			return this.instance
		}
		return
	}
	//server start
	start(opts) {
		if(opts.port) {
			this.port = opts.port
		}

		const sv = http.createServer((req, res) => {
			res.end()
		})
		this.instance = sv
		sv.on('request', (req, res) => {
			console.log('got it')
		})
		sv.listen(this.port, () => {
			console.log(`/\\ Graphy running on port ${this.port}`)
			this.instance = sv
		})
	}
}
