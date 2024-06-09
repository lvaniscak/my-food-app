import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

function Sign() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, password };

    try {
      const res = await fetch('http://localhost:4000/sign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      console.log(data);
      navigate('/login')
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <form className='max-w-sm mx-auto mt-5' onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Your name
          </label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Enter your name here'
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Your email
          </label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Enter your email here'
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
            Your password
          </label>
          <input
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Enter your password here'
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className='mb-5'>
            <input
              className='text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              type='submit'
              value='Sign In'
            />
            <Link
              to='/login'
              className='text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
              Log In
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Sign;
