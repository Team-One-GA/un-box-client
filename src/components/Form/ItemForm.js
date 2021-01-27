import React from 'react'

const ItemForm = ({ handleSubmit, handleInputChange, toggleFragile, item }) => (
  <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      name="name"
      type="text"
      placeholder="Item name here"
      value={item.name}
      onChange={handleInputChange}
    />
    <label>Quantity</label>
    <input
      name="quantity"
      type="number"
      placeholder="How many?"
      value={item.quantity}
      onChange={handleInputChange}
    />
    <label>Cost</label>
    <input
      name="cost"
      type="number"
      placeholder="How much to move?"
      value={item.cost}
      onChange={handleInputChange}
    />
    <label>Size</label>
    <input
      name="size"
      type="text"
      placeholder="How big or small is it?"
      value={item.size}
      onChange={handleInputChange}
    />
    <label>Room</label>
    <input
      name="room"
      type="text"
      placeholder="Where's this going?"
      value={item.room}
      onChange={handleInputChange}
    />
    <label>Category</label>
    <input
      name="category"
      type="text"
      placeholder="Category"
      value={item.category}
      onChange={handleInputChange}
    />
    <label>Fragile</label>
    <input
      name="fragile"
      type="checkbox"
      value={item.fragile}
      onChange={toggleFragile}
    />
    <button type="submit">Submit</button>
  </form>
)

export default ItemForm
