import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const createResolution = gql`
  mutation createResolution {
    createResolution {
      _id
    }
  }
`

class ResolutionForm extends Component{
  submitForm = () => {
    console.log(this.name.value)
    this.props.createResolution()
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
  name: 'createResolution'
})(ResolutionForm)