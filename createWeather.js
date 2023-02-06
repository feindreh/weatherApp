import { divClass, divID } from './helper.js';

export default function createWeatherElement(data) {
  console.log(data);
  const weatherELement = divClass('weatherElement');

  const name = divClass('cityElement');
  name.innerText = data.name;

  const temp = divClass('tempElement');
  temp.innerText = data.temp;

  const cloudStatus = divClass('statusElement');
  cloudStatus.innerText = data.cloudStatus;

  const cloudName = divClass('NameElement');
  cloudName.innerText = data.cloudName;

  const country = divClass('countryElement');
  country.innerText = data.country;

  weatherELement.append(name, country, temp, cloudStatus, cloudName);
  return weatherELement;
}
