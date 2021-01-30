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
        category: ''
      },
      createdId: null,
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
  handleSubmit = (event, UpdatedField) => {
    event.preventDefault()
    const { user, msgAlert } = this.props
    axios({
      url: apiUrl + '/items',
      method: 'get',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(res => {
        if (res.data.items.find(item => item.name === document.getElementById('name').value) === undefined) {
          const { user } = this.props
          const { item } = this.state
          axios({
            method: 'post',
            url: `${apiUrl}/items`,
            headers: {
              'Authorization': `Bearer ${user.token}`
            },
            data: { item }
          })
            .then((res, msgAlert) => {
              this.setState({ createdId: res.data.item._id })
              return res
            })
            .then(response => msgAlert({
              heading: 'Added Item Successfully',
              message: `${response.name} has been added!`,
              variant: 'success'
            }))
            .catch(error => {
              msgAlert({
                heading: 'Oh boy',
                message: 'Your error is ' + error.message,
                variant: 'danger'
              })
            })
        } else {
          const dawg = res.data.items.find(item => item.name === document.getElementById('name').value)
          const { user } = this.props
          const { item } = this.state
          axios({
            method: 'patch',
            url: `${apiUrl}/items/${dawg._id}`,
            headers: {
              'Authorization': `Bearer ${user.token}`
            },
            data: { item }
          })
            .then(() => this.setState({ updated: true }))
            .then(() => console.log(this.state))
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
      })
  }

  render () {
    if (this.state.createdId) {
      return <Redirect to ={`/items/${this.state.createdId}`}/>
    }
    return (
      <Fragment>
        <div className="row">
          <div className="col-sm-10 col-md-8 mx-auto mt-5">
            <h2>Add or update an item</h2>
            <ItemForm
              item={this.state.item}
              handleSubmit={this.handleSubmit}
              handleInputChange={this.handleInputChange}
            />
          </div>
        </div>
      </Fragment>
    )
  }
}
export default CreateItem
