import React from 'react'
import { useFormik } from 'formik'
import { liverCirrhosisSchema } from '../schemas'

const onSubmit = (values, actions) => {
    console.log(values)
    console.log(actions)
    actions.resetForm();
}

const LiverCirrhosis = () => {
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            age: "",
            gender: "",
            drug: "",
            presenceOfAscites: "",
            presenceOfHepatomegaly: "",
            presenceOfSpiders: "",
            presenceOfEdema: "",
            serumBilirubin: "",
            serumCholesterol: "",
            albumin: "",
            sgot: "",
            triglycerides: "",
            plateletsPerCubic: "",
            prothrombinTimeInSec: ""
        },
        validationSchema: liverCirrhosisSchema,
        onSubmit,
    })

    console.log(errors)

    return (
        <div className='w-full items-center justify-center'>
            <form onSubmit={handleSubmit}>
                <div className='flex items-center justify-center  flex-col mt-10 py-4'>
                    <label htmlFor='age' className='font-semibold w-[90%] max-w-sm'>Age</label>
                    <input type="number" id="age"
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.age && touched.age ? "border-red-500" : ""}`}
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Eg: 18"
                    />
                    {errors.age && touched.age && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.age}</p>}


                    <label htmlFor='gender' className='font-semibold w-[90%] max-w-sm mt-8'>Gender</label>
                    <select
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.gender && touched.gender ? "border-red-600" : ""}`}
                        id="gender" value={values.gender}
                        onChange={handleChange}
                    ><option value="" label="Select an option" >--select an option--</option>
                        <option value="Male" label='Male'>Male</option>
                        <option value="Female" label='Female'>Female</option>
                    </select>
                    {errors.gender && touched.gender && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.gender}</p>}

                    <label htmlFor='drug' className='font-semibold w-[90%] max-w-sm mt-8'>Drug</label>

                    <select
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.drug && touched.drug ? "border-red-600" : ""}`}
                        id="drug" value={values.drug} placeholder=''
                        onChange={handleChange}
                    ><option value="" label="Select an option" >--select an option--</option>
                        <option value="1" label='D-Penicillamine'>D-Penicillamine</option>
                        <option value="2" label='Placebo'>Placebo</option>
                    </select>
                    {errors.drug && touched.drug && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.drug}</p>}

                    <label htmlFor='presenceOfAscites' className='font-semibold w-[90%] max-w-sm mt-8'>Presence of Ascites</label>
                    <select
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.presenceOfAscites && touched.presenceOfAscites ? "border-red-600" : ""}`}
                        id="presenceOfAscites" value={values.presenceOfAscites} placeholder=''
                        onChange={handleChange}
                    ><option value="" label="Select an option" >--select an option--</option>
                        <option value="yes" label='Yes'>Yes</option>
                        <option value="no" label='No'>No</option>
                    </select>
                    {errors.presenceOfAscites && touched.presenceOfAscites && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.presenceOfAscites}</p>}

                    <label htmlFor='presenceOfHepatomegaly' className='font-semibold w-[90%] max-w-sm mt-8'>Presence of Hepatomegaly</label>
                    <select
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.presenceOfHepatomegaly && touched.presenceOfHepatomegaly ? "border-red-600" : ""}`}
                        id="presenceOfHepatomegaly" value={values.presenceOfHepatomegaly} placeholder=''
                        onChange={handleChange}
                    ><option value="" label="Select an option" >--select an option--</option>
                        <option value="yes" label='Yes'>Yes</option>
                        <option value="no" label='No'>No</option>
                    </select>
                    {errors.presenceOfHepatomegaly && touched.presenceOfHepatomegaly && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.presenceOfHepatomegaly}</p>}

                    <label htmlFor='presenceOfSpiders' className='font-semibold w-[90%] max-w-sm mt-8'>Presence of Spiders</label>
                    <select
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.presenceOfSpiders && touched.presenceOfSpiders ? "border-red-600" : ""}`}
                        id="presenceOfSpiders" value={values.presenceOfSpiders} placeholder=''
                        onChange={handleChange}
                    ><option value="" label="Select an option" >--select an option--</option>
                        <option value="yes" label='Yes'>Yes</option>
                        <option value="no" label='No'>No</option>
                    </select>
                    {errors.presenceOfSpiders && touched.presenceOfSpiders && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.presenceOfSpiders}</p>}

                    <label htmlFor='presenceOfEdema' className='font-semibold w-[90%] max-w-sm mt-8'>Presence of Edema</label>
                    <select
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.presenceOfEdema && touched.presenceOfEdema ? "border-red-600" : ""}`}
                        id="presenceOfEdema" value={values.presenceOfEdema} placeholder=''
                        onChange={handleChange}
                    ><option value="" label="Select an option" >--select an option--</option>
                        <option value="1" label='Edema Present without Diuretic Therapy'>Edema Present without Diuretic Therapy</option>
                        <option value="2" label='Edema despite Diuretic Therapy'>Edema despite Diuretic Therapy</option>
                        <option value="3" label='No Edema and No Diuretic Therapy'>No Edema and No Diuretic Therapy</option>
                    </select>
                    {errors.presenceOfEdema && touched.presenceOfEdema && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.presenceOfEdema}</p>}

                    <label htmlFor='serumBilirubin' className='font-semibold w-[90%] max-w-sm mt-8'>Serum Bilirubin (mg/dL)</label>
                    <input type="string" id="serumBilirubin"
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.age && touched.age ? "border-red-500" : ""}`}
                        value={values.serumBilirubin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Eg: 18 mg/dL"
                    />

                    {errors.serumBilirubin && touched.serumBilirubin && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.serumBilirubin}</p>}

                    <label htmlFor='serumCholesterol' className='font-semibold w-[90%] max-w-sm mt-8'>Serum Cholesterol (mg/dL)</label>
                    <input type="string" id="serumCholesterol"
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.age && touched.age ? "border-red-500" : ""}`}
                        value={values.serumCholesterol}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Eg: 18 mg/dL"
                    />
                    {errors.serumCholesterol && touched.serumCholesterol && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.serumCholesterol}</p>}
                    
                    <label htmlFor='albumin' className='font-semibold w-[90%] max-w-sm mt-8'>Albumin (mg/dL)</label>
                    <input type="string" id="albumin"
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.age && touched.age ? "border-red-500" : ""}`}
                        value={values.albumin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Eg: 18 mg/dL"
                    />
                    {errors.albumin && touched.albumin && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.albumin}</p>}
                    
                    <label htmlFor='urineCopper' className='font-semibold w-[90%] max-w-sm mt-8'>Urine Copper (μg/day)</label>
                    <input type="string" id="urineCopper"
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.age && touched.age ? "border-red-500" : ""}`}
                        value={values.urineCopper}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Eg: 18 μg/day"
                    />
                    {errors.urineCopper && touched.urineCopper && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.urineCopper}</p>}
                    
                    <label htmlFor='alkalinePhosphate' className='font-semibold w-[90%] max-w-sm mt-8'>Alkaline Phosphate (μ/Liter)</label>
                    <input type="string" id="alkalinePhosphate"
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.age && touched.age ? "border-red-500" : ""}`}
                        value={values.alkalinePhosphate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Eg: 18 μg/Liter"
                    />
                    {errors.alkalinePhosphate && touched.alkalinePhosphate && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.alkalinePhosphate}</p>}
                    
                    <label htmlFor='sgot' className='font-semibold w-[90%] max-w-sm mt-8'>SGOT (μ/ml)</label>
                    <input type="string" id="sgot"
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.age && touched.age ? "border-red-500" : ""}`}
                        value={values.sgot}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Eg: 18 μ/ml"
                    />
                    {errors.sgot && touched.sgot && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.sgot}</p>}
                    
                    <label htmlFor='triglyerides' className='font-semibold w-[90%] max-w-sm mt-8'>Triglyerides (mg/dl)</label>
                    <input type="string" id="triglyerides"
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.age && touched.age ? "border-red-500" : ""}`}
                        value={values.triglyerides}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Eg: 18 mg/dl"
                    />
                    {errors.triglyerides && touched.triglyerides && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.triglyerides}</p>}
                    
                    <label htmlFor='platelets' className='font-semibold w-[90%] max-w-sm mt-8'>Platelets Per Cubic (ml/1000)</label>
                    <input type="string" id="platelets"
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.age && touched.age ? "border-red-500" : ""}`}
                        value={values.platelets}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Eg: 18 ml/1000"
                    />
                    {errors.platelets && touched.platelets && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.platelets}</p>}
                    
                    <label htmlFor='prothrobin' className='font-semibold w-[90%] max-w-sm mt-8'>Prothrobin Time (seconds)</label>
                    <input type="string" id="prothrobin"
                        className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${errors.age && touched.age ? "border-red-500" : ""}`}
                        value={values.prothrobin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Eg: 18 seconds"
                    />
                    {errors.prothrobin && touched.prothrobin && <p className='w-[90%] max-w-sm font-medium text-red-500'>{errors.prothrobin}</p>}

                    <button disabled={isSubmitting} className='my-10 bg-black disabled:opacity-30 text-gray-100 py-4 px-4 rounded' type="submit">Predict</button>

                </div>
            </form>
        </div>
    )
}

export default LiverCirrhosis
