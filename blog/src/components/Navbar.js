import React from 'react';
import globe from '../images/globe.png';

const Navbar = () => {
  return (
    <nav className='flex justify-center md:p-8 md:mb-24 mb-12 p-2 bg-red-500 shadow-lg shadow-red-600/50'>
      <img src={globe} alt='globe' className='h-10 pr-4' />
      <p className='text-white font-bold md:text-3xl text-xl'>
        my travel journal.
      </p>
    </nav>
  );
};

export default Navbar;
