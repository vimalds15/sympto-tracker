import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { mesotheliomaSchema } from "../schemas";
import axios from "axios";
import DiseaseService from "../api/disease/disease";

const Mesothelioma = () => {
  const [predicted, setPredicted] = useState(false);
  const [result, setResult] = useState(null);

  const onSubmit = async (values, actions) => {
      const formData = Object.values(values);
      console.log(formData);
    try {
      const prediction = await DiseaseService.predictMesothelioma(formData);
      setPredicted(true);
      setResult(prediction);
      console.log(prediction);
    } catch (error) {
      console.error(error.message);
    }
  };

  //   const predictResult = async (values) => {

  //     const formData = Object.values(values);
  //   //   const data1 = [31, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1];
  //     try {
  //       const config = {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       };
  //       const { data } = await axios.post(
  //         "http://127.0.0.1:5000/predict/mesothelioma",
  //         formData,config
  //       );
  //       const {prediction} = data;
  //       setPredict(prediction)
  //       console.log(data);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   };

  //   const onSubmit = (values, actions) => {
  //     predictResult(values);
  //     // actions.resetForm();
  //   };

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
      age: "",
      gender: "",
      smoking: "",
      yellowFingers: "",
      anxiety: "",
      peerPressure: "",
      chronicDisease: "",
      fatigue: "",
      allergy: "",
      wheezing: "",
      alcohol: "",
      coughing: "",
      shortnessOfBreath: "",
      swallowingDifficulty: "",
      chestPain: "",
    },
    validationSchema: mesotheliomaSchema,
    onSubmit,
  });

  useEffect(() => {}, [predicted, result]);

  console.log(errors);

  return (
    <div className="w-full items-center justify-center">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center  flex-col mt-10 py-4">
          <label htmlFor="age" className="font-semibold w-[90%] max-w-sm">
            Age
          </label>
          <input
            type="number"
            id="age"
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.age && touched.age ? "border-red-500" : ""
            }`}
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Eg: 18"
          />
          {errors.age && touched.age && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.age}
            </p>
          )}

          <label
            htmlFor="gender"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Gender
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.gender && touched.gender ? "border-red-600" : ""
            }`}
            id="gender"
            value={values.gender}
            onChange={(e) => setFieldValue("gender", Number(e.target.value))}
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Male">
              Male
            </option>
            <option value={0} label="Female">
              Female
            </option>
          </select>
          {errors.gender && touched.gender && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.gender}
            </p>
          )}

          <label
            htmlFor="smoking"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Smoking
          </label>

          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.smoking && touched.smoking ? "border-red-600" : ""
            }`}
            id="smoking"
            value={values.smoking}
            placeholder="Eg: Male"
            onChange={(e) => setFieldValue("smoking", Number(e.target.value))}
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Yes">
              Yes
            </option>
            <option value={0} label="No">
              No
            </option>
          </select>
          {errors.smoking && touched.smoking && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.smoking}
            </p>
          )}

          <label
            htmlFor="yellowFingers"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Yellow Fingers
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.yellowFingers && touched.yellowFingers
                ? "border-red-600"
                : ""
            }`}
            id="yellowFingers"
            value={values.yellowFingers}
            placeholder="Eg: Male"
            onChange={(e) =>
              setFieldValue("yellowFingers", Number(e.target.value))
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Yes">
              Yes
            </option>
            <option value={0} label="No">
              No
            </option>
          </select>
          {errors.yellowFingers && touched.yellowFingers && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.yellowFingers}
            </p>
          )}

          <label
            htmlFor="anxiety"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Anxiety
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.anxiety && touched.anxiety ? "border-red-600" : ""
            }`}
            id="anxiety"
            value={values.anxiety}
            placeholder="Eg: Male"
            onChange={(e) => setFieldValue("anxiety", Number(e.target.value))}
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Yes">
              Yes
            </option>
            <option value={0} label="No">
              No
            </option>
          </select>
          {errors.anxiety && touched.anxiety && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.anxiety}
            </p>
          )}

          <label
            htmlFor="peerPressure"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Peer Pressure
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.peerPressure && touched.peerPressure
                ? "border-red-600"
                : ""
            }`}
            id="peerPressure"
            value={values.peerPressure}
            placeholder="Eg: Male"
            onChange={(e) =>
              setFieldValue("peerPressure", Number(e.target.value))
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Yes">
              Yes
            </option>
            <option value={0} label="No">
              No
            </option>
          </select>
          {errors.peerPressure && touched.peerPressure && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.peerPressure}
            </p>
          )}

          <label
            htmlFor="chronicDisease"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Chronic Disease
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.chronicDisease && touched.chronicDisease
                ? "border-red-600"
                : ""
            }`}
            id="chronicDisease"
            value={values.chronicDisease}
            placeholder="Eg: Male"
            onChange={(e) =>
              setFieldValue("chronicDisease", Number(e.target.value))
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Yes">
              Yes
            </option>
            <option value={0} label="No">
              No
            </option>
          </select>
          {errors.chronicDisease && touched.chronicDisease && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.chronicDisease}
            </p>
          )}

          <label
            htmlFor="fatigue"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Fatigue
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.fatigue && touched.fatigue ? "border-red-600" : ""
            }`}
            id="fatigue"
            value={values.fatigue}
            placeholder="Eg: Male"
            onChange={(e) => setFieldValue("fatigue", Number(e.target.value))}
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Yes">
              Yes
            </option>
            <option value={0} label="No">
              No
            </option>
          </select>
          {errors.fatigue && touched.fatigue && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.fatigue}
            </p>
          )}

          <label
            htmlFor="allergy"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Allergy
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.allergy && touched.allergy ? "border-red-600" : ""
            }`}
            id="allergy"
            value={values.allergy}
            placeholder="Eg: Male"
            onChange={(e) => setFieldValue("allergy", Number(e.target.value))}
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Yes">
              Yes
            </option>
            <option value={0} label="No">
              No
            </option>
          </select>
          {errors.allergy && touched.allergy && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.allergy}
            </p>
          )}

          <label
            htmlFor="wheezing"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Wheezing
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.wheezing && touched.wheezing ? "border-red-600" : ""
            }`}
            id="wheezing"
            value={values.wheezing}
            placeholder="Eg: Male"
            onChange={(e) => setFieldValue("wheezing", Number(e.target.value))}
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Yes">
              Yes
            </option>
            <option value={0} label="No">
              No
            </option>
          </select>
          {errors.wheezing && touched.wheezing && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.wheezing}
            </p>
          )}

          <label
            htmlFor="alcohol"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Alcohol
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.alcohol && touched.alcohol ? "border-red-600" : ""
            }`}
            id="alcohol"
            value={values.alcohol}
            placeholder="Eg: Male"
            onChange={(e) => setFieldValue("alcohol", Number(e.target.value))}
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Yes">
              Yes
            </option>
            <option value={0} label="No">
              No
            </option>
          </select>
          {errors.alcohol && touched.alcohol && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.alcohol}
            </p>
          )}

          <label
            htmlFor="coughing"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Cough
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.coughing && touched.coughing ? "border-red-600" : ""
            }`}
            id="coughing"
            value={values.coughing}
            placeholder="Eg: Male"
            onChange={(e) => setFieldValue("coughing", Number(e.target.value))}
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Yes">
              Yes
            </option>
            <option value={0} label="No">
              No
            </option>
          </select>
          {errors.coughing && touched.coughing && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.coughing}
            </p>
          )}

          <label
            htmlFor="shortnessOfBreath"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Shortness of Breath
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.shortnessOfBreath && touched.shortnessOfBreath
                ? "border-red-600"
                : ""
            }`}
            id="shortnessOfBreath"
            value={values.shortnessOfBreath}
            placeholder="Eg: Male"
            onChange={(e) =>
              setFieldValue("shortnessOfBreath", Number(e.target.value))
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Yes">
              Yes
            </option>
            <option value={0} label="No">
              No
            </option>
          </select>
          {errors.shortnessOfBreath && touched.shortnessOfBreath && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.shortnessOfBreath}
            </p>
          )}

          <label
            htmlFor="swallowingDifficulty"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Swallowing Difficulty
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.swallowingDifficulty && touched.swallowingDifficulty
                ? "border-red-600"
                : ""
            }`}
            id="swallowingDifficulty"
            value={values.swallowingDifficulty}
            placeholder="Eg: Male"
            onChange={(e) =>
              setFieldValue("swallowingDifficulty", Number(e.target.value))
            }
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Yes">
              Yes
            </option>
            <option value={0} label="No">
              No
            </option>
          </select>
          {errors.swallowingDifficulty && touched.swallowingDifficulty && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.swallowingDifficulty}
            </p>
          )}

          <label
            htmlFor="chestPain"
            className="font-semibold w-[90%] max-w-sm mt-8"
          >
            Chest Pain
          </label>
          <select
            className={`h-12 w-[90%] max-w-sm font-semi-bold px-4 border-2 border-gray-300 rounded-sm outline-none hover:shadow-xl transition-shadow ${
              errors.chestPain && touched.chestPain ? "border-red-600" : ""
            }`}
            id="chestPain"
            value={values.chestPain}
            placeholder="Eg: Male"
            onChange={(e) => setFieldValue("chestPain", Number(e.target.value))}
          >
            <option value="" label="Select an option">
              --select an option--
            </option>
            <option value={1} label="Yes">
              Yes
            </option>
            <option value={0} label="No">
              No
            </option>
          </select>
          {errors.chestPain && touched.chestPain && (
            <p className="w-[90%] max-w-sm font-medium text-red-500">
              {errors.chestPain}
            </p>
          )}

          <button
            className="my-10 bg-black disabled:opacity-30 text-gray-100 py-4 px-4 rounded"
            type="submit"
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
  );
};

export default Mesothelioma;
