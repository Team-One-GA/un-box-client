import React, { Component, Fragment } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'

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
          <Button onClick={this.deleteItem}>Delete</Button>
          <Button variant="outline-primary"><Link to={`/update-item/${item._id}`}>Update Item</Link></Button>
        </Fragment>
      )
    }
    return (
      <Fragment>
        <div className="row">
          <div className="col-sm-10 col-md-8 mx-auto mt-5">
            <h2>Here it is!</h2>
            {itemJsx}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ShowItem
