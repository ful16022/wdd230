// get the temp and windchill from the web page
const temp = parseFloat(document.querySelector('.temp').textContent);
const windspeed = parseFloat(document.querySelector('#windspeed').textContent);

// if temp is below 50 and wind is higher than 3 do this
if (temp <= 50 && windspeed > 3) 
{
  // calc the windchill
  let windchill = 35.74 + 0.6215 * temp -35.75 * windspeed **0.16 + 0.4275 * temp * windspeed ** 0.16;
  // display the windchill on the page
  document.querySelector('#windchill').textContent = windchill.toFixed(1);

}
