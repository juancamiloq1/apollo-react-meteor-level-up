import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`

class ResolutionForm extends Component{
  submitForm = () => {
    this.props.createResolution({
      variables: {
        name: this.name.value
      }
    }).catch(error => {
      console.log(error)
    })
  }
  render() {
    return (
      <div>
        <input type="text" ref={input => (this.name = input)} /> {/*Scott dice que esta el la forma nueva de hacer las cosas en js*/}
        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

export default graphql(createResolution, {
  name: 'createResolution',
  options: {
    refetchQueries: ["Resolutions"]
  }
})(ResolutionForm)