import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ItemForm = ({ handleSubmit, handleInputChange, item }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="name">
      <Form.Label>Name</Form.Label>
      <Form.Control
        required
        name="name"
        type="text"
        placeholder="Item name here"
        value={item.name}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Form.Group controlId="quantity">
      <Form.Label>Quantity</Form.Label>
      <Form.Control
        required
        name="quantity"
        type="number"
        min="0"
        placeholder="How many?"
        value={item.quantity}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Form.Group controlId="cost">
      <Form.Label>Cost</Form.Label>
      <Form.Control
        required
        name="cost"
        type="number"
        min="0"
        step="0.01"
        placeholder="How much to move?"
        value={item.cost}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Form.Group controlId="size">
      <Form.Label>Size</Form.Label>
      <Form.Control
        required
        name="size"
        type="text"
        placeholder="How big or small is it?"
        value={item.size}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Form.Group controlId="room">
      <Form.Label>Room</Form.Label>
      <Form.Control
        required
        name="room"
        type="text"
        placeholder="Where's this going?"
        value={item.room}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Form.Group controlId="category">
      <Form.Label>Category</Form.Label>
      <Form.Control
        required
        name="category"
        type="text"
        placeholder="Category"
        value={item.category}
        onChange={handleInputChange}
      />
    </Form.Group>
    <Button
      variant="primary"
      type="submit"
    >
      Submit
    </Button>
  </Form>
)

export default ItemForm
