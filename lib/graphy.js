import Server from './server'
import Schema from './schema'

const URL = '/graphy'

//graphy class inheriting from Server
export default class Graphy extends Server {
	instance = null

	constructor() {
		super()
	}
	register (schemOpts) {
		console.log(schemOpts)
		this.instance = new Schema(schemOpts)
	}
	get (opts = URL) {
		return new Promise((resolve, reject) => {
			let sv = this.getInstance()

			sv.on('request', (req, res) => {
				if(req.method === 'GET') {
					if(req.url === URL) {
						let graphyResponse = this._get(opts)

						resolve({ res: res, gQL: graphyResponse })
					}
				}
			})
		})

		if (opts === '/') {
			console.log('root call')
		}
	}
	async _get(opts) {
		let _gQL = await this.instance.query({
			schema: this.instance.getSchemaInstance(),
			query: `{ hello }`
		})
		return _gQL
	}
	resolver () {

	}
}

export { Schema }
