import * as yup from "yup";

export const mesotheliomaSchema = yup.object({
    age: yup.number().positive().integer().required("Required"),
    gender: yup.string().required("Required"),
    smoking:yup.string().required("Required"),
    yellowFingers:yup.string().required("Required"),
    anxiety:yup.string().required("Required"),
    peerPressure:yup.string().required("Required"),
    chronicDisease:yup.string().required("Required"),
    fatigue:yup.string().required("Required"),
    allergy:yup.string().required("Required"),
    wheezing:yup.string().required("Required"),
    alcohol:yup.string().required("Required"),
    coughing:yup.string().required("Required"),
    shortnessOfBreath:yup.string().required("Required"),
    swallowingDifficulty:yup.string().required("Required"),
    chestPain:yup.string().required("Required"),
})

export const liverCirrhosisSchema = yup.object({
    age: yup.number().positive().integer().required("Required"),
    gender: yup.string().required("Required"),
    drug:yup.string().required("Required"),
    presenceOfAscites:yup.string().required("Required"),
    presenceOfHepatomegaly:yup.string().required("Required"),
    presenceOfSpiders:yup.string().required("Required"),
    presenceOfEdema:yup.string().required("Required"),
    serumBilirubin:yup.string().required("Required"),
    serumCholesterol:yup.string().required("Required"),
    albumin:yup.string().required("Required"),
    sgot:yup.string().required("Required"),
    triglycerides:yup.string().required("Required"),
    plateletsPerCubic:yup.string().required("Required"),
    prothrombinTimeInSec:yup.string().required("Required"),
})