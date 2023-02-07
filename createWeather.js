import { divClass, divID } from './helper.js';

export function createWeatherElement(data) {
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

export async function filterGPSdata(incomingData) {
  const options = createOptions(incomingData);
  console.log(options)
}


function createOptions(arr){
  console.log(arr)
  const options = divID("options");

  for(let i = 0; i<arr.length;i++){
    
    const option = divClass("option")

    const name = divClass("optionName")
    name.innerText = arr[i].name;
    const country = divClass("optioncountry")
    country.innerText = arr[i].country
    const state = divClass("optionState")
    state.innerText = arr[i].state

    option.append(name,country,state)
    options.append(option)
  }

return options
}
