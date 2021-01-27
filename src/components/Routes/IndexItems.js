import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'

class IndexItems extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: null
    }
  }

  componentDidMount () {
    const { user } = this.props
    axios({
      url: apiUrl + '/items',
      method: 'get',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(res => this.setState({ items: res.data.items }))
      .catch(console.error)
  }
  render () {
    let itemsJsx
    if (this.state.items === null) {
      itemsJsx = 'Loading...'
    } else if (this.state.items.length === 0) {
      itemsJsx = 'You don\'t have any items, stupid!'
    } else {
      const itemsList = this.state.items.map(item => (
        <li key={item._id}>
          <Link to={`/items/${item._id}`}>{item.name}</Link>
        </li>
      ))
      itemsJsx = (
        <ul>
          {itemsList}
        </ul>
      )
    }
    return (
      <div>
        <h1>Check out the items, bro!</h1>
        {itemsJsx}
      </div>
    )
  }
}

export default IndexItems
