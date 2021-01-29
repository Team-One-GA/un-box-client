import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

class IndexItems extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: null
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props
    axios({
      url: apiUrl + '/items',
      method: 'get',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(res => this.setState({ items: res.data.items }))
      .then(() => msgAlert({
        heading: 'Ayyyyyyyy',
        message: 'It\'s all here',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'What?',
          message: 'This?' + error.message,
          variant: 'danger'
        })
      })
  }
  render () {
    let itemsJsx
    if (this.state.items === null) {
      itemsJsx = 'Loading...'
    } else if (this.state.items.length === 0) {
      itemsJsx = 'You don\'t have any items, stupid!'
    } else {
      const itemsList = this.state.items.map(item => (
        <Card key={item._id} className = "d-inline-flex" style={{ width: '12rem' }}>
          <Link to={`/items/${item._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Quantity: {item.quantity}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Cost: ${item.cost}</Card.Subtitle>
              <Card.Text>
                {`Total Cost: $${item.quantity * item.cost}`}
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
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
