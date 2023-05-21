/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500  to-indigo-50">
      <form className="w-80" onSubmit={handleSubmit}>
       
        <div className="mb-8">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
           Name
          </label>
          <input
            type="name"
            id="name"
            name='name'
            placeholder='enter your name'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            required
          />
        </div>
        <div className="mb-8">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name='email'
            placeholder='enter yout email'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name='password'
            placeholder='enter your password'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="mb-8">
          <label htmlFor="photo-url" className="block text-gray-700 text-sm font-bold mb-2">
           Photo URL
          </label>
          <input
            type="photo-url"
            id="photo-url"
            name='photo-url'
            placeholder='enter your photo url'
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        // onChange={handleEmailChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
           Registration
          </button> 
        </div>
        <br />
  <p className="mt-4 text-white text-sm">
        already have an account,{' '}
        <Link to="/login" className="text-blue-500 font-semibold">
          <span className='text-lg'>please sign in</span>
        </Link>
      </p>
      </form>
    
    </div>
  );
};

export default Register;
