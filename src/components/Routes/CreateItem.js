import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import ItemForm from '../Form/ItemForm'

class CreateItem extends Component {
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
      createdId: null
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
      method: 'post',
      url: `${apiUrl}/items`,
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { item }
    })
      .then(res => {
        this.setState({ createdId: res.data.item._id })
        return res
      })
      .then(res => msgAlert({
        heading: 'Created Item Successfully',
        message: `${res.data.item.name} has been added!`,
        variant: 'success'
      }))
      .catch(res => {
        msgAlert({
          heading: 'Oh boy',
          message: `${res.data.item.name} already exists`,
          variant: 'danger'
        })
      })
  }
  render () {
    if (this.state.createdId) {
      return <Redirect to ={`/items/${this.state.createdId}`}/>
    }
    console.log(this.state.createdId)
    return (
      <Fragment>
        <h2>Create an item</h2>
        <ItemForm
          item={this.state.item}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
      </Fragment>
    )
  }
}
export default CreateItem
