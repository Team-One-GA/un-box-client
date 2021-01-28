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
        category: '',
        fragile: false
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
    const { user } = this.props
    const { item } = this.state
    console.log(this)
    axios({
      method: 'patch',
      url: `${apiUrl}/items/${this.props.match.params._id}`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { item }
    })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
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
