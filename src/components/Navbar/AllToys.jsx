/* eslint-disable no-unused-vars */


import React, { useState } from 'react';

const AddToyForm = () => {
  const [toy, setToy] = useState({
    toyImageUrl: '',
    toyName: '',
    sellerName: '',
    sellerEmail: '',
    subCategory: '',
    price: '',
    rating: '',
    quantity: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any additional processing or validation here
    // You can access the toy object with the form data

    console.log(toy);
  };

  const handleChange = (e) => {
    setToy({
      ...toy,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1>Add A Toy</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="toyImageUrl">Picture URL:</label>
        <input
          type="text"
          id="toyImageUrl"
          name="toyImageUrl"
          value={toy.toyImageUrl}
          onChange={handleChange}
          required
        />

        <label htmlFor="toyName">Name:</label>
        <input
          type="text"
          id="toyName"
          name="toyName"
          value={toy.toyName}
          onChange={handleChange}
          required
        />

        <label htmlFor="sellerName">Seller Name:</label>
        <input
          type="text"
          id="sellerName"
          name="sellerName"
          value={toy.sellerName}
          onChange={handleChange}
        />

        <label htmlFor="sellerEmail">Seller Email:</label>
        <input
          type="email"
          id="sellerEmail"
          name="sellerEmail"
          value={toy.sellerEmail}
          onChange={handleChange}
          required
        />

        <label htmlFor="subCategory">Sub-category:</label>
        <select
          id="subCategory"
          name="subCategory"
          value={toy.subCategory}
          onChange={handleChange}
        >
          <option value="Math Toys">Math Toys</option>
          <option value="Language Toys">Language Toys</option>
          <option value="Science Toys">Science Toys</option>
        </select>

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={toy.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={toy.rating}
          onChange={handleChange}
          required
        />

        <label htmlFor="quantity">Available Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={toy.quantity}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={toy.description}
          onChange={handleChange}
          required
        ></textarea>

        <input type="submit" value="Add Toy" />
      </form>
    </div>
  );
};

export default AddToyForm;
