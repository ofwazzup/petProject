// "use strict"

// const weather = document.querySelector('.weather');

// async function loadWeather(e) {
//     weather.innerHTML = `
//     <div class="weather__loading">
//         <img src="pics/loading.gif" alt="Loading...">
//     </div>`;

//     const server = 'http://api.openweathermap.org/geo/1.0/direct?q=Tolyatti&limit=5&appid=75430ec0e07f2c2adfac500ba74dea78'
//     const response = await fetch(server, {
//         method: 'GET',
//     });
//     const responseResult = await response.json();

//     if (response.ok) {
//         getWeather(responseResult);
//     } else {
//         weather.innerHTML = responseResult.message;
//     }
// }

// function getWeather(data) {
//     console.log(data);

//     const location = data.name;
//     const temp = Math.round(data.main.temp);
//     const feelsLike = Math.round(data.main.feels_Like);
//     const weatherStatus = data.weather[0].main;
//     const weatherIcon = data.weather[0].icon;

//     const template = `
//     <div class="weather__header">
//         <div class="weather__main">
//             <div class="weather__city">${location}</div>
//             <div class="weather__status">${weatherStatus}</div>
//         </div>
//         <div class="weather__icon">
//             <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
//         </div>
//     </div>
//         <div class="weather__temp">${temp}</div>
//         <div class="weather__feels-like">Feels like: ${feelsLike}</div>`;

//     weather.innerHTML = template;
// }

// if (weather) {
//     loadWeather();
// }



const link = 'https://api.openweathermap.org/data/2.5/weather?q=Tolyatti&units=metric&apikey=75430ec0e07f2c2adfac500ba74dea78'

let request = new XMLHttpRequest();
request.open('GET', link, true);

request.onload = function() {
    let obj = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
    let temp = obj.main.temp;
    }
    else{
     console.log("The city doesn't exist! Kindly check");
    }
   }
   request.send();