import { divClass, divID } from './helper.js';

export default function createWeatherElement(data) {
  console.log(data);
  const weatherELement = divClass('weatherElement');

  const name = divClass('cityElement');
  name.innerText = data.name;

  const temp = divClass('tempElement');
  temp.innerText = data.temp;

  const maxtemp = divClass('tempElement');
  maxtemp.innerText = data.maxtemp;

  const mintemp = divClass('tempElement');
  mintemp.innerText = data.mintemp;

  const cloudStatus = divClass('statusElement');
  cloudStatus.innerText = data.cloudStatus;

  const cloudName = divClass('NameElement');
  cloudName.innerText = data.cloudName;

  weatherELement.append(name, temp, maxtemp, mintemp, cloudStatus, cloudName);
  return weatherELement;
}
