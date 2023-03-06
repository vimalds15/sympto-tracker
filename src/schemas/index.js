import * as yup from "yup";

export const mesotheliomaSchema = yup.object({
  age: yup.number().positive().integer().required("Required"),
  gender: yup.string().required("Required"),
  smoking: yup.string().required("Required"),
  yellowFingers: yup.string().required("Required"),
  anxiety: yup.string().required("Required"),
  peerPressure: yup.string().required("Required"),
  chronicDisease: yup.string().required("Required"),
  fatigue: yup.string().required("Required"),
  allergy: yup.string().required("Required"),
  wheezing: yup.string().required("Required"),
  alcohol: yup.string().required("Required"),
  coughing: yup.string().required("Required"),
  shortnessOfBreath: yup.string().required("Required"),
  swallowingDifficulty: yup.string().required("Required"),
  chestPain: yup.string().required("Required"),
});

export const coronaryHeartDisease = yup.object({
  age: yup.number().positive().integer("Must be Integer").required("Required"),
  gender: yup.string().required("Required"),
  chestPainType: yup.string().required("Required"),
  restingBloodPressure: yup
    .number()
    .positive()
    .integer("Must be Integer")
    .required("Required"),
  serumCholestrol: yup
    .number()
    .positive()
    .integer("Must be Integer")
    .required("Required"),
  fastingBloodSugar: yup.string().required("Required"),
  restingElectrographicResults: yup.string().required("Required"),
  maximumHeartRateAchieved: yup
    .number()
    .positive()
    .integer("Must be Integer")
    .required("Required"),
  exerciseInducedAngina: yup.string().required("Required"),
  oldPeak: yup
    .number()
    .positive()
    .integer("Must be Integer")
    .required("Required"),
  slopeOfPeakExercise: yup
    .number()
    .positive()
    .integer("Must be Integer")
    .required("Required"),
  numberOfMajorVessels: yup.string().required("Required"),
});

export const diabetesMellitus = yup.object({
  age: yup.number().positive().integer("Must be Integer").required("Required"),
  gender: yup.string().required("Required"),
  pregnancies: yup.number().positive().integer("Must be Integer").required("Required"),
  glucose: yup.number().positive().integer("Must be Integer").required("Required"),
  diastolicBloodPressure: yup.number().positive().integer("Must be Integer").required("Required"),
  tricepsSkinFoldThickness: yup.number().positive().integer("Must be Integer").required("Required"),
  serumInsulin: yup.number().positive().integer("Must be Integer").required("Required"),
  bodyMassIndex: yup.number().positive().integer("Must be Integer").required("Required"),
  diabetesPedigreeFunction: yup.number("Must be Numeric Digits").positive().required("Required"),
});
