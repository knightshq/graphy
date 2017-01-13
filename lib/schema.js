import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

import error from './logger'

//schema class implmenting functionality related to GraphQL schema
export default class Schema {
	schema = null

	constructor (schemOpts) {
		let obj = schemOpts.root

		const schema = new GraphQLSchema({
		  query: new GraphQLObjectType(schemOpts)
		})

		this.schema = schema
	}
	getSchemaInstance () {
		if(this.schema) {
			return this.schema
		}
		return
	}
	query (qy) {
		if(qy.schema && qy.query) {
			return new Promise((resolve, reject) => {
				graphql(qy.schema, qy.query).then(r => {
					resolve(r)
				})
				.catch(err => {
					reject(err)
				})
			})
		}
	}
}
