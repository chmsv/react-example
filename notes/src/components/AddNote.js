import React from 'react'
import { Link } from 'react-router-dom'

const AddNote = () => {
  return (
    <Link
      to='/note/new'
      className='text-4xl border-8 rounded-full border-green-500 text-green-500 hover:font-semibold m-4 p-1 hover:text-green-700 font-extrabold hover:border-green-700'
    >
      &#xFF0B;
    </Link>
  );
}

export default AddNote
