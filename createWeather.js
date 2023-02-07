import { divClass, divID } from './helper.js';
import { getWeatherfromGps } from './weatherAPI.js';

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

  const icon = document.createElement("img");
  icon.src = data.icon;

  const closeIT = divClass("closeIT");
  closeIT.innerText = "close"
  closeIT.addEventListener(("click"),(e)=>{
    e.target.parentNode.remove()
  })

  weatherELement.append(name, country, temp, cloudStatus, cloudName,icon,closeIT);
  return weatherELement;
}

export function createOptions(arr){
  const options = divID("options");

  for(let i = 0; i<arr.length;i++){
    
    const option = divClass("option")

    const name = divClass("optionName")
    name.innerText = arr[i].name;

    const country = divClass("optioncountry")
    country.innerText = arr[i].country

    const state = divClass("optionState")
    state.innerText = arr[i].state
    if(arr[i].state === undefined){
      state.innerText = ""
    }
    
   


    option.append(name,country,state)
    options.append(option)
    option.addEventListener("click", async ()=>{
      const weather = await getWeatherfromGps(arr[i]);
      document.querySelector("#options").remove();

      document.querySelector("#weatherDisplay").append(createWeatherElement(weather))
    })
  }

return options
}
