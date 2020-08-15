// make variables// set empty arrays//
var city=""; 
var url="";
var APIkey="";
var queryurl ="";
var currenturl = "";
var citiesDiv = document.getElementById("searched_cities_container");

//empty arrays
cities = []; 
searchClicker(); 
init(); 
listClicker(); 


//function for saved citiesgit 
function init(){
    let saved_cities = JSON.parse(localStorage.getItem("cities"));

    if (saved_cities !== null){
        cities = saved_cities
    }   
    
    renderButtons(); 
}

function storeCities(){
    localStorage.setItem("cities", JSON.stringify(cities)); 
}
//render buttons for each element in cities array as a search history for user
function renderButtons(){
    citiesDiv.innerHTML = ""; 
    if(cities == null){
        return;
    }
    var unique_cities = [...new Set(cities)];
    for(var i=0; i < unique_cities.length; i++){
        var cityName = unique_cities[i]; 

        var buttonEl = document.createElement("button");
        buttonEl.textContent = cityName; 
        buttonEl.setAttribute("class", "listbtn"); 

        citiesDiv.appendChild(buttonEl);
        listClicker();
      }
    }
       
    function listClicker(){
    $(".listbtn").on("click", function(event){
        console.log("anybody home?")
        event.preventDefault();
        console.log("hello?");
        city = $(this).text().trim();
        APIcalls(); 
    })
    }
