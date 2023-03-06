import React from 'react'
import DiseaseCard from '../components/DiseaseCard'
import { diseases } from '../diseases/diseases'

const HomeScreen = () => {
  return (
    <div className='flex flex-col bg-[#ebebeb] items-center justify-center py-10'>
      {diseases.map(disease=>( 
          <DiseaseCard key={disease.id} id={disease.id} name={disease.name} />
      ))}  
    </div>
  )
}

export default HomeScreen