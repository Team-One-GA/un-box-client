import React, { Component, Fragment } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class ShowItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      item: null,
      deleted: false
    }
  }
  componentDidMount (item) {
    const { user, msgAlert } = this.props
    axios({
      url: `${apiUrl}/items/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(res => {
        this.setState({ item: res.data.item })
        return res
      })
      .then(res => msgAlert({
        heading: 'Here!',
        message: `You are now viewing ${res.data.item.name}`,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Whoops',
          message: 'Something went wrong: ' + error.message,
          variant: 'danger'
        })
      })
  }
  deleteItem = () => {
    const { user, msgAlert } = this.props
    console.log(this.state.item._id)
    axios({
      url: `${apiUrl}/items/${this.state.item._id}`,
      method: 'delete',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Destroyed!',
        message: `${this.state.item.name} has been terminated`,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'This one is stubborn!',
          message: 'Check this: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    let itemJsx
    const { item, deleted } = this.state
    if (deleted) {
      return <Redirect to="/items"/>
    }
    if (item === null) {
      itemJsx = 'Loading'
    } else {
      itemJsx = (
        <Fragment>
          <h2>{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Cost: ${item.cost}</p>
          <p>Size: {item.size}</p>
          <p>Location: {item.room}</p>
          <p>Category: {item.category}</p>
          <button onClick={this.deleteItem}>Delete</button>
          <button><Link to={`/update-item/${item._id}`}>Update Item</Link></button>
        </Fragment>
      )
    }
    return (
      <Fragment>
        <h2>Show Items Page</h2>
        {itemJsx}
      </Fragment>
    )
  }
}

export default ShowItem
