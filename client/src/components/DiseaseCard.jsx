import React from 'react'
import { Link } from 'react-router-dom'

const DiseaseCard = ({name,id,image}) => {
  return (
    
    <div className='flex items-center justify-center rounded-md overflow-hidden h-[290px] max-w-[250px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer hover:shadow-purple-400 bg-opacity-25 backdrop-filter backdrop-blur-md '>
      <Link to={`detail/${id}`} className='flex flex-col items-start justify-start w-full h-full'>
        <img src={image} alt="disease-pic" className='h-[90%] -mt-2 w-full object-contain' />
        <p className='p-3 mb-2 font-semibold  text-black'>{name}</p>
    </Link>
    </div>
    
  )
}

export default DiseaseCard