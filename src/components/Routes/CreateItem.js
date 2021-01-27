import React, { Component, Fragment } from 'react'
// import { Redirect } from 'react-router-dom'
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
  toggleFragile = () => {
    this.setState(initialState => ({
      fragile: !initialState.fragile
    }))
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { item } = this.state
    axios({
      method: 'post',
      url: `${apiUrl}/items`,
      data: { item }
    })
      .then(res => this.setState({ createdId: res.data.item._id }))
      .then(console.log(this.state))
      .catch(console.error)
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
  render () {
    // if (this.state.createdId) {
    //   return <Redirect to ={`/items/${this.state.createdId}`}/>
    // }
    // console.log(this.state.createdId)
    return (
      <Fragment>
        <h2> Create an item</h2>
        <ItemForm
          item={this.state.item}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          toggleFragile={this.toggleFragile}
        />
      </Fragment>
    )
  }
}
export default CreateItem
