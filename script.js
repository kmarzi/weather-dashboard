var city = "";
var url = "";
var APIkey = "";
var queryurl = "";
var currenturl = "";
var citiesDiv = document.getElementById("city-search");

var cities = [];
init();
listClicker();
searchClicker();

function init() {
    var savedCities = JSON.parse(localStorage.getItem("cities"));

    if (savedCities !== null) {
        cities = savedCities
    }

    renderButtons();
}

function storeCities() {
    localStorage.setItem("cities", JSON.stringify(cities));
}

function renderButtons() {
    citiesDiv.innerHTML = "";
    if (cities == null) {
        return;
    }
    var diffCities = [...new Set(cities)];
    for (var i = 0; i < diffCities.length; i++) {
        var cityName = diffCities[i];

        var buttonEl = document.createElement("button");
        buttonEl.textContent = cityName;
        buttonEl.setAttribute("class", "listbtn");

        citiesDiv.appendChild(buttonEl);
        listClicker();
    }
}

function listClicker() {
    $(".listbtn").on("click", function (event) {
        console.log("anybody home?")
        event.preventDefault();
        console.log("hello?");
        city = $(this).text().trim();
        API();
    })
}


function searchClicker() {
    $("#searchbtn").on("click", function (event) {
        event.preventDefault();
        city = $(this).prev().val().trim()


        cities.push(city);
        if (cities.length > 8) {
            cities.shift()
        }

        if (city == "") {
            return;
        }
        API();
        storeCities();
        renderButtons();
    })
}

function API() {

    url = "https://api.openweathermap.org/data/2.5/forecast?q=";
    currenturl = "https://api.openweathermap.org/data/2.5/weather?q=";
    APIkey = "&appid=5ce8439fd4264478d1da0b24a7cd547d";
    queryurl = url + city + APIkey;
    current_weather_url = currenturl + city + APIkey;

    $("#city-name").text("Today's Weather in " + city);
    $.ajax({
        url: queryurl,
        method: "GET",

    }).then(function (response) {
        var day_number = 0;


        for (var i = 0; i < response.list.length; i++) {

            if (response.list[i].dt_txt.split(" ")[1] == "15:00:00") {
              
                var day = response.list[i].dt_txt.split("-")[2].split(" ")[0];
                var month = response.list[i].dt_txt.split("-")[1];
                var year = response.list[i].dt_txt.split("-")[0];
                $("#" + day_number + "date").text(month + "/" + day + "/" + year);
                var temp = Math.round(((response.list[i].main.temp - 273.15) * 9 / 5 + 32));
                $("#" + day_number + "five_day_temp").text("Temp: " + temp + String.fromCharCode(176) + "F");
                $("#" + day_number + "five_day_humidity").text("Humidity: " + response.list[i].main.humidity);
                $("#" + day_number + "five_day_icon").attr("src", "http://openweathermap.org/img/w/" + response.list[i].weather[0].icon + ".png");
                console.log(response.list[i].dt_txt.split("-"));
                console.log(day_number);
                console.log(response.list[i].main.temp);
                day_number++;
            }
        }
    });

    $.ajax({
        url: current_weather_url,
        method: "GET",
    }).then(function (current_data) {

        var temp = Math.round(((current_data.main.temp - 273.15) * 9 / 5 + 32))
        console.log("The temperature in " + city + " is: " + temp);
        $("#current-temp").text("Temperature: " + temp + String.fromCharCode(176) + "F");
        $("#current-humidity").text("Humidity: " + current_data.main.humidity);
        $("#current-wind-speed").text("Wind Speed: " + current_data.wind.speed);
        $("#current-icon").attr({
            "src": "http://openweathermap.org/img/w/" + current_data.weather[0].icon + ".png",
            "height": "100px", "width": "100px"
        });
    })


}