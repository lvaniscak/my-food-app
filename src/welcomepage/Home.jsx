import React from 'react';
import { Link } from 'react-router-dom';
import img from './img/welomefood.jpg';


function Home() {
    
  return (
    <>
    <div className='grid grid-cols-2 mt-2'>
        <div className='h-50 w-50'>
          <img src={img} alt='food' className='w-6/6 mt-2 rounded-lg'/>
        </div>
        <div  className='flex items-center justify-center h-50 w-50'>  
          <div>
            <h1 className='text-5xl ml-2 font-sans text-center text-cyan-900/100'>Welcome</h1>
            <br />
            <br />
            <p className='text-2xl ml-2 font-sans text-center text-cyan-900/100'>People who love to eat are always the best people.
            <br />- Julia Child</p>
            <br />
            <br />
            <div className='grid items-center justify-center grid-cols-2'>
                <Link to='/sign' className='text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Sing In</Link>
                <Link to='/login'className='text-center py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>Log In</Link>
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Home;