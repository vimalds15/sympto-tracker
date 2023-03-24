import React, { useState } from 'react'
import { useFormik } from 'formik'
import {
  coronaryHeartDisease,
  diabetesMellitus,
  mesotheliomaSchema,
} from '../schemas'

const DiabetesMellitus = () => {
  const [predicted, setPredicted] = useState(false)
  const [result, setResult] = useState(null)

  const onSubmit = async (values, actions) => {
    const formData = Object.values(values)
    console.log(formData)
    // try {
    //   const prediction = await DiseaseService.predictMesothelioma(formData)
    //   setPredicted(true)
    //   setResult(prediction)
    //   console.log(prediction)
    // } catch (error) {
    //   console.error(error.message)
    // }
  }
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      age: '',
      gender: '',
      pregnancies: '',
      glucose: '',
      diastolicBloodPressure: '',
      tricepsSkinFoldThickness: '',
      serumInsulin: '',
      bodyMassIndex: '',
      diabetesPedigreeFunction: '',
    },
    validationSchema: diabetesMellitus,
    onSubmit,
  })

  console.log(errors)

  return (
    <div className='w-full items-center justify-center'>
      <form onSubmit={handleSubmit}>
        <div className='flex items-center justify-center  flex-col mt-10 py-4'>
          <label htmlFor='age' className='font-semibold w-[90%] max-w-sm'>
            Age
          </label>
          <input
            type='number'
            id='age'
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.age && touched.age ? 'border-red-500' : ''
            }`}
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Eg: 18'
          />
          {errors.age && touched.age && (
            <p className='w-[90%] max-w-sm font-medium text-red-500'>
              {errors.age}
            </p>
          )}

          <label
            htmlFor='gender'
            className='font-semibold w-[90%] max-w-sm mt-8'
          >
            Gender
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.gender && touched.gender ? 'border-red-600' : ''
            }`}
            id='gender'
            value={values.gender}
            onChange={(e) => setFieldValue('gender', Number(e.target.value))}
          >
            <option value='' label='Select an option'>
              --select an option--
            </option>
            <option value={1} label='Male'>
              Male
            </option>
            <option value={0} label='Female'>
              Female
            </option>
          </select>
          {errors.gender && touched.gender && (
            <p className='w-[90%] max-w-sm font-medium text-red-500'>
              {errors.gender}
            </p>
          )}

          <label
            htmlFor='pregnancies'
            className='font-semibold w-[90%] mt-8 max-w-sm'
          >
            No of Pregnancies
          </label>
          <input
            type='number'
            id='pregnancies'
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.pregnancies && touched.pregnancies ? 'border-red-500' : ''
            }`}
            value={values.pregnancies}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Eg: 1'
          />
          {errors.pregnancies && touched.pregnancies && (
            <p className='w-[90%] max-w-sm font-medium text-red-500'>
              {errors.pregnancies}
            </p>
          )}

          <label
            htmlFor='glucose'
            className='font-semibold w-[90%] mt-8 max-w-sm'
          >
            Glucose Level
          </label>
          <input
            type='number'
            id='glucose'
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.glucose && touched.glucose ? 'border-red-500' : ''
            }`}
            value={values.glucose}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Eg: 1'
          />
          {errors.glucose && touched.glucose && (
            <p className='w-[90%] max-w-sm font-medium text-red-500'>
              {errors.glucose}
            </p>
          )}

          <label
            htmlFor='diastolicBloodPressure'
            className='font-semibold w-[90%] mt-8 max-w-sm'
          >
            Diastolic Blood Pressure (mm Hg)
          </label>
          <input
            type='number'
            id='diastolicBloodPressure'
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.diastolicBloodPressure && touched.diastolicBloodPressure
                ? 'border-red-500'
                : ''
            }`}
            value={values.diastolicBloodPressure}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Eg: 1'
          />
          {errors.diastolicBloodPressure && touched.diastolicBloodPressure && (
            <p className='w-[90%] max-w-sm font-medium text-red-500'>
              {errors.diastolicBloodPressure}
            </p>
          )}

          <label
            htmlFor='tricepsSkinFoldThickness'
            className='font-semibold w-[90%] mt-8 max-w-sm'
          >
            Triceps Skin Fold Thickness (in mm)
          </label>
          <input
            type='number'
            id='tricepsSkinFoldThickness'
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.tricepsSkinFoldThickness &&
              touched.tricepsSkinFoldThickness
                ? 'border-red-500'
                : ''
            }`}
            value={values.tricepsSkinFoldThickness}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Eg: 1'
          />
          {errors.tricepsSkinFoldThickness &&
            touched.tricepsSkinFoldThickness && (
              <p className='w-[90%] max-w-sm font-medium text-red-500'>
                {errors.tricepsSkinFoldThickness}
              </p>
            )}

          <label
            htmlFor='serumInsulin'
            className='font-semibold w-[90%] mt-8 max-w-sm'
          >
            Serum Insulin (mu U/ml)
          </label>
          <input
            type='number'
            id='serumInsulin'
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.serumInsulin && touched.serumInsulin
                ? 'border-red-500'
                : ''
            }`}
            value={values.serumInsulin}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Eg: 1'
          />
          {errors.serumInsulin && touched.serumInsulin && (
            <p className='w-[90%] max-w-sm font-medium text-red-500'>
              {errors.serumInsulin}
            </p>
          )}

          <label
            htmlFor='bodyMassIndex'
            className='font-semibold w-[90%] mt-8 max-w-sm'
          >
            Body Mass Index (BMI)
          </label>
          <input
            type='number'
            id='bodyMassIndex'
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.bodyMassIndex && touched.bodyMassIndex
                ? 'border-red-500'
                : ''
            }`}
            value={values.bodyMassIndex}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Eg: 1'
          />
          {errors.bodyMassIndex && touched.bodyMassIndex && (
            <p className='w-[90%] max-w-sm font-medium text-red-500'>
              {errors.bodyMassIndex}
            </p>
          )}

          <label
            htmlFor='diabetesPedigreeFunction'
            className='font-semibold w-[90%] mt-8 max-w-sm'
          >
            Diabetes Pedigree Function
          </label>
          <input
            type='number'
            id='diabetesPedigreeFunction'
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.diabetesPedigreeFunction &&
              touched.diabetesPedigreeFunction
                ? 'border-red-500'
                : ''
            }`}
            value={values.diabetesPedigreeFunction}
            step='0.01'
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Eg: 1'
          />
          {errors.diabetesPedigreeFunction &&
            touched.diabetesPedigreeFunction && (
              <p className='w-[90%] max-w-sm font-medium text-red-500'>
                {errors.diabetesPedigreeFunction}
              </p>
            )}

          <button
            disabled={isSubmitting}
            className='my-10 bg-black disabled:opacity-30 text-gray-100 py-4 px-4 rounded'
            type='submit'
          >
            Predict
          </button>

          {predicted &&
            (result === 1 ? (
              <p>Yes, you have this disease</p>
            ) : (
              <p>No, you dont have this disease</p>
            ))}
        </div>
      </form>
    </div>
  )
}

export default DiabetesMellitus
