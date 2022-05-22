import axios from 'axios';

const getWeightData = async (baseUrl) => axios.get(baseUrl);
export default getWeightData;
