 var apiKey = "f22c7df987b77fbf3f4c8bf5eb71a13f"
 var city 
 var currentDay
 var futureDay
 var temperature
 var humidity
 var windSpeed
 var uvi


var cityForm = document.getElementById("cityForm");
cityForm.addEventListener("submit", function(event){
    event.preventDefault();
    getWeather();
})

//grab form element 
//add an eventlistener on submit for the form
//pass the getWeather function into the event listener

//function for CURRENT weather
//grab elements that we want to add text
//setting context = correct weather value

function getWeather() {
    var cityName = document.getElementById("searchBar").value;
    console.log(cityName)
    var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=f22c7df987b77fbf3f4c8bf5eb71a13f&units=imperial";
 $.ajax({
     url: queryUrl, success: function(result){
     console.log(result)
     console.log(result.main.temp)
     console.log(result.main.humidity)
     console.log(result.wind.speed)
        
     
     var tempP = document.getElementById("current-temp")
     tempP.textContent ="Current Temperature is: " + (result.main.temp)

     var humidtyP = document.getElementById("current-humidity")
     humidtyP.textContent ="Current Humidity is: " + (result.main.humidity)

     var windSpeedP = document.getElementById("current-wind-speed")
     windSpeedP.textContent ="Current Windspeed is: " + (result.wind.speed)

     var currentIconP = document.getElementById ("current-icon")
     currentIconP
 }})
}
result();

//attempting local storage
// function init() {
//     if(localStorage.getItem("cityName")) {
//         var saveSearches = JSON.parse(localStorage.getItem("cityName"));
//         cityName =saveSearches
//     }else {
//         cityName
//     }
// }

//5 day forecast


