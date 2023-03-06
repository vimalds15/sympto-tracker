import React from 'react'
import { useFormik } from 'formik'
import { coronaryHeartDisease, mesotheliomaSchema } from '../schemas'

const onSubmit = (values,actions) => {
    console.log(values)
    console.log(actions)
    actions.resetForm();
}

const CoronaryHeartDisease = () => {
    const {values,errors,touched,isSubmitting,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues:{
            age:"",
            gender:"",
            chestPainType:"",
            restingBloodPressure:"",
            serumCholestrol:"",
            fastingBloodSugar:"",
            restingElectrographicResults:"",
            maximumHeartRateAchieved:"",
            exerciseInducedAngina:"",
            oldPeak:"",
            slopeOfPeakExercise:"",
            numberOfMajorVessels:""
        },
        validationSchema:coronaryHeartDisease,
        onSubmit,
    })

    console.log(errors)

  return (
    <div className='w-full items-center justify-center'>
        <form onSubmit={handleSubmit}>
            <div className='flex items-center justify-center  flex-col mt-10 py-4'>
                <label htmlFor='age' className='font-semibold w-[90%] max-w-sm'>Age</label>
                <input type="number" id="age"
                    className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.age && touched.age ? "border-red-500":""}`}
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Eg: 18"
                />
                {errors.age && touched.age && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.age}</p>}

               
                <label htmlFor='gender' className='font-semibold w-[90%] max-w-sm mt-8'>Gender</label>
                <select
                    className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.gender && touched.gender ? "border-red-600":""}`}
                id="gender" value={values.gender} 
                    onChange={handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="Male" label='Male'>Male</option>
                    <option value="Female" label='Female'>Female</option>
                </select>
                {errors.gender && touched.gender && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.gender}</p>}

                <label htmlFor='chestPainType' className='font-semibold w-[90%] max-w-sm mt-8'>Chest Pain Type</label>

                <select
                className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.chestPainType && touched.chestPainType ? "border-red-600":""}`}
                id="chestPainType" value={values.chestPainType}
                    onChange={handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="1" label='Typical Angina'>Typical Angina</option>
                    <option value="2" label='Atypical Angina'>Atypical Angina</option>
                    <option value="3" label='Non-Anginal'>Non-Anginal</option>
                    <option value="4" label='Asymptomatic'>Asymptomatic</option>
                </select>
                {errors.chestPainType && touched.chestPainType && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.chestPainType}</p>}

                <label htmlFor='restingBloodPressure' className='font-semibold w-[90%] max-w-sm mt-8'>Resting Blood Pressure (in mm Hg)</label>
                <input type="text" id="restingBloodPressure"
                    className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.restingBloodPressure && touched.restingBloodPressure ? "border-red-500":""}`}
                    value={values.restingBloodPressure}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Eg: 20"
                />
                {errors.restingBloodPressure && touched.restingBloodPressure && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.restingBloodPressure}</p>}

                <label htmlFor='serumCholestrol' className='font-semibold w-[90%] max-w-sm mt-8'>Serum Cholestrol (in mg/dl)</label>
                <input type="text" id="serumCholestrol"
                    className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.serumCholestrol && touched.serumCholestrol ? "border-red-500":""}`}
                    value={values.serumCholestrol}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Eg: 20"
                />
                {errors.serumCholestrol && touched.serumCholestrol && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.serumCholestrol}</p>}

                <label htmlFor='fastingBloodSugar' className='font-semibold w-[90%] max-w-sm mt-8'>Is Fasting Bloog Sugar is greater than 120mg/dl </label>
                <select
                className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.fastingBloodSugar && touched.fastingBloodSugar ? "border-red-600":""}`}
                id="fastingBloodSugar" value={values.fastingBloodSugar} placeholder='Eg: Male'
                    onChange={handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="yes" label='Yes'>Yes</option>
                    <option value="no" label='No'>No</option>
                </select>
                {errors.fastingBloodSugar && touched.fastingBloodSugar && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.fastingBloodSugar}</p>}

                <label htmlFor='restingElectrographicResults' className='font-semibold w-[90%] max-w-sm mt-8'>Chronic Disease</label>
                <select
                className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.restingElectrographicResults && touched.restingElectrographicResults ? "border-red-600":""}`}
                id="restingElectrographicResults" value={values.restingElectrographicResults} placeholder='Eg: Male'
                    onChange={handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="1" label='Normal'>Normal</option>
                    <option value="2" label='STT Abnormality'>STT Abnormality</option>
                    <option value="2" label='LV Hypertrophy'>LV Hypertrophy</option>
                </select>
                {errors.restingElectrographicResults && touched.restingElectrographicResults && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.restingElectrographicResults}</p>}

                <label htmlFor='maximumHeartRateAchieved' className='font-semibold w-[90%] max-w-sm mt-8'>Maximum Heart Rate Acheived</label>
                <input type="text" id="maximumHeartRateAchieved"
                    className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.maximumHeartRateAchieved && touched.maximumHeartRateAchieved ? "border-red-500":""}`}
                    value={values.maximumHeartRateAchieved}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Eg: 20"
                />
                {errors.maximumHeartRateAchieved && touched.maximumHeartRateAchieved && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.maximumHeartRateAchieved}</p>}

                <label htmlFor='exerciseInducedAngina' className='font-semibold w-[90%] max-w-sm mt-8'>Exercise-Induced Angina</label>
                <select
                className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.exerciseInducedAngina && touched.exerciseInducedAngina ? "border-red-600":""}`}
                id="exerciseInducedAngina" value={values.exerciseInducedAngina} placeholder='Eg: Male'
                    onChange={handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="yes" label='Yes'>Yes</option>
                    <option value="no" label='No'>No</option>
                </select>
                {errors.exerciseInducedAngina && touched.exerciseInducedAngina && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.exerciseInducedAngina}</p>}

                <label htmlFor='oldPeak' className='font-semibold w-[90%] max-w-sm mt-8'>OldPeak (ST Depression Induced by exercise relative to rest)</label>
                <input type="text" id="oldPeak"
                    className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.oldPeak && touched.oldPeak ? "border-red-500":""}`}
                    value={values.oldPeak}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Eg: 20"
                />
                {errors.oldPeak && touched.oldPeak && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.oldPeak}</p>}

                <label htmlFor='slopeOfPeakExercise' className='font-semibold w-[90%] max-w-sm mt-8'>Slope of the Peak Exercise ST segment</label>
                <input type="text" id="slopeOfPeakExercise"
                    className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.slopeOfThePeakExercise && touched.slopeOfThePeakExercise ? "border-red-500":""}`}
                    value={values.slopeOfPeakExercise}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Eg: 20"
                />
                {errors.slopeOfPeakExercise && touched.slopeOfPeakExercise && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.slopeOfPeakExercise}</p>}

                <label htmlFor='numberOfMajorVessels' className='font-semibold w-[90%] max-w-sm mt-8'>Number of the Major Vessels</label>
                <select 
                className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.numberOfMajorVessels && touched.numberOfMajorVessels ? "border-red-600":""}`}
                id="numberOfMajorVessels" value={values.numberOfMajorVessels} placeholder='Eg: Male'
                    onChange={handleChange}
                ><option value="" label="Select an option" >--select an option--</option>
                    <option value="0" label='0'>0</option>
                    <option value="1" label='1'>1</option>
                    <option value="2" label='2'>2</option>
                    <option value="3" label='3'>3</option>
                </select>
                {errors.numberOfMajorVessels && touched.numberOfMajorVessels && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.numberOfMajorVessels}</p>}

                

                <button disabled={isSubmitting} className='my-10 bg-black disabled:opacity-30 text-gray-100 py-4 px-4 rounded' type="submit">Predict</button>

            </div>
        </form>
    </div>
  )
}

export default CoronaryHeartDisease