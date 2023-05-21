/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle} from 'react-icons/fa';

const Login = () => {
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
    // Add your login logic here
    console.log('Login form submitted');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500  to-indigo-50">
      <form className="w-80" onSubmit={handleSubmit}>
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
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button> 
        </div>
        <br />
        <div className='flex border-purple-50 '>Or Sign In with<div className='flex  ml-6 '><p className='mx-'><FaGoogle /></p> <br /> <h2>Google</h2></div></div>
        <p className="mt-4 text-white text-sm">
        If you don't have an account,{' '}
        <Link to="/registration" className="text-blue-500 font-semibold">
          please register
        </Link>
      </p>
      </form>
    
    </div>
  );
};

export default Login;
