import React from 'react';
import { Link } from 'react-router-dom';


function Welcome(){
    return(
        <>
        <nav className='bg-cyan-950 font-sans py-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link to='/'className='text-white text-2xl font-bold'>FoodApp</Link>
                <div className='hidden md:flex space-x-4'>
                    <Link to='/home'className='text-white hover:text-gray-300'>Home</Link>
                    <Link to='./login'className='text-white hover:text-gray-300'>Log In</Link>
                    <Link to='./sign'className='text-white hover:text-gray-300'>Sign In</Link>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Welcome;