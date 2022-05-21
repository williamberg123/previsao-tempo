import axios from 'axios';

const getWeightData = async (baseUrl) => axios.get(baseUrl, {
    headers: {
        'Access-Control-Allow-Origin': 'https://no-cors',
    },
    withCredentials: false,
});
export default getWeightData;
