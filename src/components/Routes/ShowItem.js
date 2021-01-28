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
    console.log(this)
    const { user } = this.props
    axios({
      url: `${apiUrl}/items/${this.props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(res => this.setState({ item: res.data.item }))
      .catch(console.error)
  }
  deleteItem = () => {
    const { user } = this.props
    axios({
      url: `${apiUrl}/items/${this.state.item._id}`,
      method: 'delete',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
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
          <p>Cost: {item.cost}</p>
          <p>Size: {item.size}</p>
          <p>Location: {item.room}</p>
          <p>Category: {item.category}</p>
          <p>Fragile: {item.fragile}</p>
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
