import React from 'react'
import { Link } from 'react-router-dom'

const DiseaseCard = ({name,id}) => {
  return (
    <Link to={`detail/${id}`} className='flex items-center justify-center w-full h-full'>
    <div className='flex items-center justify-center w-[90%] lg:w-[50%] max-w-xl bg-white py-7 mb-10 rounded shadow-xl hover:shadow-2xl transition-all cursor-pointer'>
        <p className='font-medium bg-red'>{name}</p>
    </div>
    </Link>
  )
}

export default DiseaseCard