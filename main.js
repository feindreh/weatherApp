
import { createOptions } from './createWeather.js';
import { clearInput } from './helper.js';
import { getGPSoptions } from './weatherAPI.js';

const input = document.querySelector('#cityName');
const Button = document.querySelector('#getWeather');
const weatherDisplay = document.querySelector('#weatherDisplay');
const content = document.querySelector("#content")

let weatherData;

Button.addEventListener('click', async () => {

  const gpsOptions = await getGPSoptions(input.value);
  clearInput(input);
  content.append(createOptions(gpsOptions))
});

