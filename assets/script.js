 var apiKey = "f22c7df987b77fbf3f4c8bf5eb71a13f"
 var city 
 var currentDay
 var futureDay
 var temperature
 var humidity
 var windSpeed
 var uvi

  // grab form element 
 // add an eventlistener on submit for the form
 // pass the getWeather function into the event listener
var cityForm = document.getElementById("cityForm");
cityForm.addEventListener("submit", function(event){
    event.preventDefault();
    getWeather();
})


// function for CURRENT weather
// grab elements that we want to add text
// setting context = correct weather value
// tutor help
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

     var humidityP = document.getElementById("current-humidity")
     humidityP.textContent ="Current Humidity is: " + (result.main.humidity)

     var windSpeedP = document.getElementById("current-wind-speed")
     windSpeedP.textContent ="Current Windspeed is: " + (result.wind.speed)

    var iconcode = result.weather[0].icon
    displayCurrentIcon(iconcode);

 }})
}

//current date
function displayCurrentDate() {
    var currentDate = moment().format('MMMM Do YYYY')
    var displayDate = document.getElementById("current-date")
    displayDate.textContent = "Todays Date is: " + (currentDate)
}
displayCurrentDate();

//curent icon
function displayCurrentIcon (iconcode) {
    var currentIconP = document.getElementById ("current-icon")
    currentIconP.innerHTML = ""
    var currentImg = document.createElement("img")
    var iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    currentImg.setAttribute("src" , iconUrl)
    currentIconP.appendChild(currentImg)
}




//attempting local storage
// function init() {
//     if(localStorage.getItem("cityName")) {
//         var saveSearches = JSON.parse(localStorage.getItem("cityName"));
//         cityName =saveSearches
//     }else {
//         cityName
//     }
// }

// ---used code from coding quiz---
//function save(){
//     event.preventDefault()
//     console.log("save")
//     var localStorageArr = JSON.parse(localStorage.getItem("cityName"))||[]
//     var newEntry = {
//     
//     }
//     localStorageArr.push(newEntry)
//     localStorage.setItem("cityName", JSON.stringify(localStorageArr))
//     location.href="highscores.html"
// }
// submitButton.addEventListener("click", save)




//5 day forcast
