import React from 'react'
import vimalLogo from "../assets/logo-vim.png"
import aniketLogo from "../assets/ak.svg"

const Footer = () => {
  return (
    <div className='flex bg-slate-400	 w-full h-52 justify-center'>
        <img src={vimalLogo} />
        <img src={aniketLogo} />
    </div>
  )
}

export default Footer