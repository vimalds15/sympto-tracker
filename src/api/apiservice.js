import axios from "axios";

const ApiService = {
  predictDisease: async (disease, formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const endpoint = `/predict/${disease}`;
    const response = await axios.post(endpoint, formData, config);
    return response.data;
  },
};

export default ApiService;
