/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Toy = ({ name, price, quantity, description, onUpdate }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState(price);
  const [updatedQuantity, setUpdatedQuantity] = useState(quantity);
  const [updatedDescription, setUpdatedDescription] = useState(description);

  const handleUpdateClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Pass the updated Toy information to the parent component
    onUpdate({
      price: updatedPrice,
      quantity: updatedQuantity,
      description: updatedDescription
    });
    setModalOpen(false);
  };

  return (
    <div>
      <h3>Toy Name: {name}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Description: {description}</p>
      <button onClick={handleUpdateClick}>Update</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Update Toy Information</h2>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="price">Price:</label>
              <input
                type="text"
                id="price"
                value={updatedPrice}
                onChange={(e) => setUpdatedPrice(e.target.value)}
                required
              />
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={updatedQuantity}
                onChange={(e) => setUpdatedQuantity(e.target.value)}
                required
              />
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
                required
              ></textarea>
              <input type="submit" value="Update" />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Toy;
