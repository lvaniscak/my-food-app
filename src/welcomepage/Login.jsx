import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/sign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    console.log(data);

    try {
      console.log('Login form submitted:', formData);
     if(formData.email !== "" && formData.password !== ""){
      console.log('your login was succesfull')
     }
    } catch (error) {
      console.error('Error submitting login form:', error);
    }
  };


  return (
    <>
      <form className='max-w-sm mx-auto mt-5' onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Email
          </label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Enter your email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <br/>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Password
          </label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Enter your password'
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <div className='mb-5'>
            <input
              className='text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              type='submit'
              value='Login'
            />
            <Link
              to='/sign'
              className='text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
export default Login;

