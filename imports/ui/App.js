import React from 'react'

import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import ResolutionForm from './ResolutionForm'


 
const App = ({ loading, resolutions }) => {
  if(loading) return null // Con esta linea ayudamos para que map pueda funcionar
  return (
    <div>
      <ResolutionForm />
      <ul>
        {resolutions.map(resolution => (
          <li key={resolution._id}>
            {resolution.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

const resolutionsQuery = gql`
  query Resolutions {
    hi
    resolutions {
      _id
      name
    }
  }
`

export default graphql(resolutionsQuery,{
  props: ({data}) => ({ ...data })
})(App)