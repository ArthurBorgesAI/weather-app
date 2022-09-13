import axios from 'axios';
const apiKey = '***';

const getWeather = (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
    return axios.get(url).then((response) => response.data);
}

export default getWeather;