import React from 'react'
import vimalLogo from "../assets/logo-vim.png"
import aniketLogo from "../assets/ak.svg"

const Footer = () => {
  return (
    <div className='flex bg-black	 w-full h-52 justify-center items-center'>
        {/* <img src={vimalLogo} className="h-52" /> */}
        <p className='text-gray-300 text-sm'>&copy; Sympto Tracker 2023.</p>
    </div>
  )
}

export default Footer