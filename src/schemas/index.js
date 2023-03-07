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