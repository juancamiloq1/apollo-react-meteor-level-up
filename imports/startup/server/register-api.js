import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql'

const testSchema = `
  type Query {
    hi: String
    resolutions: [Resolution]
  }
`

const typeDefs = [ testSchema, ResolutionsSchema ]

const resolvers = {
  Query: {
    hi() {
      return 'Hola Juan Camilo vamos a crear Hypernova.Studio'
    },
    resolutions() {
      return [
        {
          _id: '30304949568854',
          name: 'Terminar todo lo comenzado!'
        },
        {
          _id: '984759845923845298',
          name: 'Organizate con tu agenda!'
        },
        {
          _id: '984759845923453435',
          name: 'Gain some weigth!'
        },
        {
          _id: '9847598s3453455298',
          name: 'Obten buen estado fisico!'
        }
      ]
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema })