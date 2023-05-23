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
    <div style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Add A Toy</h1>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px' }}>
        <label htmlFor="toyImageUrl" style={{ textAlign: 'left' }}>
          Picture URL:
        </label>
        <input
          type="text"
          id="toyImageUrl"
          name="toyImageUrl"
          value={toy.toyImageUrl}
          onChange={handleChange}
          required
          style={{ width: '100%' }}
        />

        <label htmlFor="toyName" style={{ textAlign: 'left' }}>
          Name:
        </label>
        <input
          type="text"
          id="toyName"
          name="toyName"
          value={toy.toyName}
          onChange={handleChange}
          required
          style={{ width: '100%' }}
        />

        <label htmlFor="sellerName" style={{ textAlign: 'left' }}>
          Seller Name:
        </label>
        <input
          type="text"
          id="sellerName"
          name="sellerName"
          value={toy.sellerName}
          onChange={handleChange}
          style={{ width: '100%' }}
        />

        <label htmlFor="sellerEmail" style={{ textAlign: 'left' }}>
          Seller Email:
        </label>
        <input
          type="email"
          id="sellerEmail"
          name="sellerEmail"
          value={toy.sellerEmail}
          onChange={handleChange}
          required
          style={{ width: '100%' }}
        />

        <label htmlFor="subCategory" style={{ textAlign: 'left' }}>
          Sub-category:
        </label>
        <select
          id="subCategory"
          name="subCategory"
          value={toy.subCategory}
          onChange={handleChange}
          style={{ width: '100%' }}
        >
          <option value="Math Toys">Math Toys</option>
          <option value="Language Toys">Language Toys</option>
          <option value="Science Toys">Science Toys</option>
        </select>

        <label htmlFor="price" style={{ textAlign: 'left' }}>
          Price:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={toy.price}
          onChange={handleChange}
          required
          style={{ width: '100%' }}
        />

        <label htmlFor="rating" style={{ textAlign: 'left' }}>
          Rating:
        </label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={toy.rating}
          onChange={handleChange}
          required
          style={{ width: '100%' }}
        />

        <label htmlFor="quantity" style={{ textAlign: 'left' }}>
          Available Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={toy.quantity}
          onChange={handleChange}
          required
          style={{ width: '100%' }}
        />

        <label htmlFor="description" style={{ textAlign: 'left' }}>
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={toy.description}
          onChange={handleChange}
          required
          style={{ width: '100%', height: '100px' }}
        ></textarea>

        <input
          type="submit"
          value="Add Toy"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
            width: '100%'
          }}
        />
      </form>
    </div>
  );
};

export default AddToyForm;
