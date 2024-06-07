import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';




function UserScreen() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='bg-cyan-950 font-sans py-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'className='text-white text-2xl font-bold'>FoodApp</Link>
        
        <div className='hidden md:flex space-x-4'>
          <Link to='/getrecipe'className='text-white hover:text-gray-300'>Search Recipe</Link>
          <Link to='/shop-list'className='text-white hover:text-gray-300'>Shop List</Link>
          <Link to='/supplies'className='text-white hover:text-gray-300'>Supplies</Link>
          <Link to='/save-food'className='text-white hover:text-gray-300'>Favourite Recipe</Link>
        </div>

        <div className='md:hidden'>
          <button onClick={handleToggle}className='text-white focus:outline-none'>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className='md:hidden'>
          <ul className='flex flex-col items-center space-y-4 py-4'>
            <li>
              <Link to='/getrecipe'className='text-white hover:text-gray-300' onClick={handleToggle}>Search Recipe</Link>
            </li>
            <li>
              <Link to='/shop-list'className='text-white hover:text-gray-300' onClick={handleToggle}>Shop List</Link>
            </li>
            <li>
              <Link to='/supplies'className='text-white hover:text-gray-300' onClick={handleToggle}>Supplies</Link>
            </li>
            <li>
              <Link to='/save-food'className='text-white hover:text-gray-300' onClick={handleToggle}>Favourite Recipe</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default UserScreen;
