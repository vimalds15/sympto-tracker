import ApiService from "../apiservice";

const DiseaseService = {
    predictMesothelioma: async (formData) => {
            const {prediction} = await ApiService.predictDisease("mesothelioma",formData)
            return prediction
    }
}

export default DiseaseService