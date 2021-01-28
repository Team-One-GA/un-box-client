import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import ItemForm from '../Form/ItemForm'

class UpdateItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      item: {
        name: '',
        quantity: '',
        cost: '',
        size: '',
        room: '',
        category: ''
      },
      updated: false
    }
  }
  handleInputChange = (event) => {
    event.persist()
    const updatedField = {
      [event.target.name]: event.target.value
    }
    this.setState(() => {
      const newItem = Object.assign({}, this.state.item, updatedField)
      return { item: newItem }
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    const { user, msgAlert } = this.props
    const { item } = this.state
    axios({
      method: 'patch',
      url: `${apiUrl}/items/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { item }
    })
      .then(() => this.setState({ updated: true }))
      .then(() => msgAlert({
        heading: 'Updated!',
        message: 'Well, something changed.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Uh-oh!',
          message: 'Peep this error: ' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    if (this.state.updated) {
      return <Redirect to ={`/items/${this.props.match.params.id}`}/>
    }
    return (
      <Fragment>
        <h2>Update Your Item</h2>
        <ItemForm
          item={this.state.item}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
      </Fragment>
    )
  }
}
export default UpdateItem
