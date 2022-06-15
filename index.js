"use strict";

// function getWeather (){
//     var location = document.getElementById("location").value;
//     var icon =  document.getElementById("icon").src = currentWeather.current.condition.icon 

//    var weather = document.getElementById("weather").value;

    
// fetch("http://api.weatherapi.com/v1/current.json?key=cdfc1ecfa8294e34b64154938221406&q=London&aqi=no")
// .then(querySnapshot => querySnapshot.json())
// .then(currentWeather => console.log(currentWeather.current.condition.text))
// weather.innerHTML = currentWeather.current.condition.text; 
// icon.src = currentWeather.current.condition.icon;


// }
document.getElementById("btn").onclick =()=>{
    var location = document.getElementById("location").value;
    var icon  =  document.getElementById("icon").value;
    var weather  = document.getElementById("weather").value; 




    fetch("http://api.weatherapi.com/v1/current.json?key=cdfc1ecfa8294e34b64154938221406&q="+ 'Nairobi' +"&aqi=no")
.then(querySnapshot => querySnapshot.json())
.then(currentWeather => {
console.log(currentWeather);
document.getElementById("weather").innerHTML = currentWeather.current.condition.text; 
document.getElementById("icon").src = currentWeather.current.condition.icon;
document.getElementById("locationn").innerHTML = currentWeather.location.name;
document.getElementById("temp").innerHTML = `${currentWeather.current.temp_c}C`;
document.getElementById("date").innerHTML = currentWeather.location.localtime;
document.getElementById("wSpeed").innerHTML = `${currentWeather.current.wind_kph}km/h`;
document.getElementById("humidity").innerHTML = `${currentWeather.current.humidity}%`;

})
    
}


// function getWeather (){
//     var location = document.getElementById("location").value;

//     fetch("http://api.weatherapi.com/v1/current.json?key=cdfc1ecfa8294e34b64154938221406&q=London&aqi=no")
//     .then((querySnapshot)=>{
//         querySnapshot.json();
//     //    var currentWeather = currentWeather.current.condition.text;
//     //    console.log(currentWeather);
//     }).then(( currentWeather)=>{
//         console.log(currentWeather.current.condition.text)
//     })

// }

