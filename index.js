"use strict";
window.oncontextmenu = ()=>{
    return false;
}

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
    var icon  =  document.getElementById("icon")
    // var weather  = document.getElementById("weather").value; 





    fetch("http://api.weatherapi.com/v1/current.json?key=cdfc1ecfa8294e34b64154938221406&q="+location+"&aqi=no")
.then(querySnapshot => querySnapshot.json())
.then(currentWeather => {
console.log(currentWeather);
document.getElementById("weather").innerHTML = currentWeather.current.condition.text; 
icon.src = currentWeather.current.condition.icon;

document.getElementById("locationn").innerHTML = currentWeather.location.name;
document.getElementById("temp").innerHTML = `${currentWeather.current.temp_c}C`;
document.getElementById("date").innerHTML = currentWeather.location.localtime;
document.getElementById("wSpeed").innerHTML = `${currentWeather.current.wind_kph}km/h`;
document.getElementById("humidity").innerHTML = `${currentWeather.current.humidity}%`;


document.getElementById("dot").style.display ="block";
document.getElementById("wind").style.display ="block";
document.getElementById("hum").style.display ="block";

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

