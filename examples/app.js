import Graphy, { Schema } from './graphy'

//should be exposed from graphy
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';


let app = new Graphy()
app.start({ port: 3000 })

//import schema from another file
app.register({
	name: 'RootQueryType',
		fields: {
		  hello: {
		    type: GraphQLString,
		    resolve() {
		      return 'Teayeon'
		    }
		  }
	}
});

app.get('/graphy')
.then(r => {
	return r.gQL
})
.then(s => {
	console.log(s)
})
