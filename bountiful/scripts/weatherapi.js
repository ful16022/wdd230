// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const humidity = document.querySelector("#humidity");
//const windspeed =document.querySelector('#windspeed');

const urlweather = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=39b872f8e87273fe71de9bf6dc5a8b5f";
const urlforecast = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=39b872f8e87273fe71de9bf6dc5a8b5f";


async function apiFetch1(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults1(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
  
}

function displayResults1(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&deg;F</strong>`;
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = capitalize(desc);
  //windspeed.textContent = weatherData.wind.speed.toFixed(1);
  humidity.textContent = weatherData.main.humidity;

  
}

async function apiFetch2(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults2(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
  
}
  
function displayResults2(weatherData) {
  //currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}&deg;F</strong>`;
  //const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
  //const desc = weatherData.weather[0].description;

  //weatherIcon.setAttribute('src', iconsrc);
  //weatherIcon.setAttribute('alt', desc);
  //captionDesc.textContent = capitalize(desc);
  //windspeed.textContent = weatherData.wind.speed.toFixed(1);
  //humidity.textContent = weatherData.main.humidity;

    
  //Getting the min and max values for each day
  for(i = 0; i<3; i++){
    document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(weatherData.list[i].main.temp_min).toFixed(1)+ "°";
    //Number(1.3450001).toFixed(2); // 1.35
  }

  for(i = 0; i<3; i++){
      document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(weatherData.list[i].main.temp_max).toFixed(2) + "°";
  }
  //------------------------------------------------------------

  //Getting Weather Icons
  for(i = 0; i<3; i++){
      document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
      weatherData.list[i].weather[0].icon
      +".png";
  }

 
}

//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
  if(day + d.getDay() > 6){
      return day + d.getDay() - 7;
  }
  else{
      return day + d.getDay();
  }
}

  for(i = 0; i<3; i++){
      document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
  }

function capitalize(s) {
  const words = s.split(" ");
  //console.log(words);

  // loop array to change the first letter in each array itme to cap
  for (let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
}

apiFetch1(urlweather);
apiFetch2(urlforecast);
