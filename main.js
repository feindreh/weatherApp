import getWeatherFromCity from './weatherAPI.js';

const input = document.querySelector('#cityName');
const Button = document.querySelector('#getWeather');

let weatherData;

Button.addEventListener('click', async () => {
  await getWeatherFromCity(input.value).then((response) => { weatherData = response; });
  console.log(weatherData);
});
