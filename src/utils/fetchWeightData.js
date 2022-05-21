// import axios from 'axios';

const fetchWeightData = async (baseUrl) => fetch(baseUrl, {
    headers: {
        'Access-Control-Allow-Origin': 'https://williamberg123.github.io/',
    },
});

export default fetchWeightData;
