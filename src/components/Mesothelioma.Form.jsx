import React from 'react'
import { useFormik } from 'formik'

const Mesothelioma = () => {
    const formik = useFormik({
        initialValues:{
            age:"",
            gender:"",
            smoking:"",
            yellowFingers:"",
            anxiety:"",
            peerPressure:"",
            chronicDisease:"",
            fatigue:"",
            allergy:"",
            wheezing:"",
            alcohol:"",
            coughing:"",
            shortnessOfBreath:"",
            swallowingDifficulty:"",
            chestPain:""
        }
    })

    console.log(formik)

  return (
    <div className='w-full items-center justify-center'>
        <form>
            <div className='flex items-center justify-center  flex-col mt-10 py-4'>
                <label htmlFor='age' className='font-semibold w-[90%] max-w-sm'>Age</label>
                <input type="number" id="age"
                    className='h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow'
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    placeholder="Eg: 18"
                />

               
                <label htmlFor='gender' className='font-semibold w-[90%] max-w-sm mt-8'>Gender</label>
                <select
                    className='h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow'
                id="gender" value={formik.values.gender} placeholder='Eg: Male'
                    onChange={formik.handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="M" label='Male'>Male</option>
                    <option value="F" label='Female'>Female</option>
                </select>
              

                <label htmlFor='smoking' className='font-semibold w-[90%] max-w-sm mt-8'>Smoking</label>

                <select
                className='h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow'
                id="smoking" value={formik.values.smoking} placeholder='Eg: Male'
                    onChange={formik.handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="yes" label='Yes'>Yes</option>
                    <option value="no" label='No'>No</option>
                </select>

                <label htmlFor='y-fingers' className='font-semibold w-[90%] max-w-sm mt-8'>Yellow Fingers</label>
                <select 
                className='h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow'
                id="y-fingers" value={formik.values.yellowFingers} placeholder='Eg: Male'
                    onChange={formik.handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="yes" label='Yes'>Yes</option>
                    <option value="no" label='No'>No</option>
                </select>

                <label htmlFor='anxiety' className='font-semibold w-[90%] max-w-sm mt-8'>Anxiety</label>
                <select 
                className='h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow'
                id="anxiety" value={formik.values.anxiety} placeholder='Eg: Male'
                    onChange={formik.handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="yes" label='Yes'>Yes</option>
                    <option value="no" label='No'>No</option>
                </select>

                <label htmlFor='peerPressure' className='font-semibold w-[90%] max-w-sm mt-8'>Peer Pressure</label>
                <select
                className='h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow'
                id="peerPressure" value={formik.values.peerPressure} placeholder='Eg: Male'
                    onChange={formik.handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="yes" label='Yes'>Yes</option>
                    <option value="no" label='No'>No</option>
                </select>

                <label htmlFor='chronicDisease' className='font-semibold w-[90%] max-w-sm mt-8'>Chronic Disease</label>
                <select
                className='h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow'
                id="chronicDisease" value={formik.values.chronicDisease} placeholder='Eg: Male'
                    onChange={formik.handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="yes" label='Yes'>Yes</option>
                    <option value="no" label='No'>No</option>
                </select>

                <label htmlFor='fatigue' className='font-semibold w-[90%] max-w-sm mt-8'>Fatigue</label>
                <select
                className='h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow'
                id="fatigue" value={formik.values.fatigue} placeholder='Eg: Male'
                    onChange={formik.handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="yes" label='Yes'>Yes</option>
                    <option value="no" label='No'>No</option>
                </select>

                <label htmlFor='allergy' className='font-semibold w-[90%] max-w-sm mt-8'>Allergy</label>
                <select
                className='h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow'
                id="allergy" value={formik.values.allergy} placeholder='Eg: Male'
                    onChange={formik.handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="yes" label='Yes'>Yes</option>
                    <option value="no" label='No'>No</option>
                </select>

                <label htmlFor='wheezing' className='font-semibold w-[90%] max-w-sm mt-8'>Wheezing</label>
                <select
                className='h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow'
                id="wheezing" value={formik.values.wheezing} placeholder='Eg: Male'
                    onChange={formik.handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="yes" label='Yes'>Yes</option>
                    <option value="no" label='No'>No</option>
                </select>

                <label htmlFor='alcohol' className='font-semibold w-[90%] max-w-sm mt-8'>Alcohol</label>
                <select
                className='h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow'
                id="alcohol" value={formik.values.alcohol} placeholder='Eg: Male'
                    onChange={formik.handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="yes" label='Yes'>Yes</option>
                    <option value="no" label='No'>No</option>
                </select>

                <label htmlFor='coughing' className='font-semibold w-[90%] max-w-sm mt-8'>Cough</label>
                <select 
                className='h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow'
                id="coughing" value={formik.values.coughing} placeholder='Eg: Male'
                    onChange={formik.handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="yes" label='Yes'>Yes</option>
                    <option value="no" label='No'>No</option>
                </select>

                <label htmlFor='shortnessOfBreath' className='font-semibold w-[90%] max-w-sm mt-8'>Shortness of Breath</label>
                <select
                className='h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow'
                id="shortnessOfBreath" value={formik.values.shortnessOfBreath} placeholder='Eg: Male'
                    onChange={formik.handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="yes" label='Yes'>Yes</option>
                    <option value="no" label='No'>No</option>
                </select>

                <label htmlFor='swallowingDifficulty' className='font-semibold w-[90%] max-w-sm mt-8'>Swallowing Difficulty</label>
                <select
                className='h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow'
                id="swallowingDifficulty" value={formik.values.swallowingDifficulty} placeholder='Eg: Male'
                    onChange={formik.handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="yes" label='Yes'>Yes</option>
                    <option value="no" label='No'>No</option>
                </select>

                <label htmlFor='chestPain' className='font-semibold w-[90%] max-w-sm mt-8'>Chest Pain</label>
                <select 
                className='h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow'
                id="chestPain" value={formik.values.chestPain} placeholder='Eg: Male'
                    onChange={formik.handleChange}
                >
                    <option value="" label="Select an option" >--select an option--</option>
                    <option value="yes" label='Yes'>Yes</option>
                    <option value="no" label='No'>No</option>
                </select>

            </div>
        </form>
    </div>
  )
}

export default Mesothelioma