import React from 'react'
import DiseaseCard from '../components/DiseaseCard'
import { diseases } from '../diseases/diseases'

const HomeScreen = () => {
  return (
    <div className='flex flex-grow items-center justify-center py-10  '>
      <div className='flex flex-row max-w-4xl justify-center items-center gap-12 flex-wrap'>
      {diseases.map(disease=>( 
          <DiseaseCard key={disease.id} id={disease.id} name={disease.name} image={disease.image} />
      ))}  
      </div>
    </div>
  )
}

export default HomeScreen