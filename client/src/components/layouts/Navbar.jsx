import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex items-center justify-center h-14  shadow-xl '>
      <Link to='/'>
        <p className='font-bold text-gray-500'>Sympto <span className='text-purple-500'>Tracker</span></p>    
        </Link>
    </div>   
    </>
  )
}

export default Navbar