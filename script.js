"use strict";

let darkModeBtn = $("#darkMode");
let darkbtn = $('#dark')
let header = $("header");
let main = $("main");
let textDark = $('#textDark')

let weatherCard = $(".weather-card");
let weatherCard2 = $(".weather-card2");
let hourlyWeather = $(".hourly"); 
let celciesWeather = $(".celcies");


// let baseUrl = "https://api.weatherapi.com/v1";
// let key = '4752b93ae1d24912888105630240303';

// (async function (){
//     let res = await fetch(`${baseUrl}/forecast.json?key=${key}&days=${5}&q=${"Tashkent"}`);
//     let data = await res.json()
//     console.log(data);
// })()



let isDarkMode = false;

function applyLightMode() {
  document.body.style.backgroundColor = "grey";
  document.body.style.color = "black";
  header.style.backgroundColor = "grey";
  header.style.color = "black";
  main.style.backgroundColor = "grey";
  main.style.color = "black";
  weatherCard.style.backgroundColor = "grey";
  weatherCard.style.color = "black";
  weatherCard2.style.backgroundColor = "grey";
  weatherCard2.style.color = "black";
  hourlyWeather.style.backgroundColor = "grey";
  hourlyWeather.style.color = "black";
  celciesWeather.style.backgroundColor = "grey";
  celciesWeather.style.color = "black";
  darkbtn.style.position = "relative";
  darkbtn.style.left = "55px";
  textDark.textContent = "Dark Mode";
  isDarkMode = false;
}

function applyDarkMode() {
  document.body.style.backgroundColor = "#0e0e0e";
  document.body.style.color = "white";
  header.style.backgroundColor = "#0e0e0e";
  header.style.color = "white";
  main.style.backgroundColor = "#0e0e0e";
  main.style.color = "white";
  weatherCard.style.backgroundColor = "#0e0e0e";
  weatherCard.style.color = "white";
  weatherCard2.style.backgroundColor = "#0e0e0e";
  weatherCard2.style.color = "white";
  hourlyWeather.style.backgroundColor = "#0e0e0e";
  hourlyWeather.style.color = "white";
  celciesWeather.style.backgroundColor = "#0e0e0e";
  celciesWeather.style.color = "white";
  darkbtn.style.position = "relative";
  darkbtn.style.left = "0px";
  textDark.textContent = "Light Mode";
  isDarkMode = true;
}

const toggleDarkModeButton = document.getElementById("darkMode");
toggleDarkModeButton.addEventListener("click", function () {
  if (isDarkMode) {
    applyLightMode();
  } else {
    applyDarkMode();
  }
});