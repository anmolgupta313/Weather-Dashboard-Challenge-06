
var searchInput= document.querySelector("#city")

var searchBtn= document.querySelector("#search-btn")

searchBtn.addEventListener("click",function(event){

  event.preventDefault();
  
  var searchInputValue= searchInput.value;
  localStorage.setItem("city",searchInputValue);

  var formSearchDiv=  document.querySelector("#form-search-div")
  var cityListDiv= document.createElement("div");

  formSearchDiv.appendChild(cityListDiv);

  var citylistBtn=  document.createElement("button");

  citylistBtn.setAttribute("class","city-list-btn");

  citylistBtn.setAttribute("style", "width:100%; margin-top:20px; background-color:rgb(45, 84, 255); color:white; padding: 6px 0px 6px 0px; border:rgb(45, 84, 255); cursor:pointer;");
  citylistBtn.innerHTML= localStorage.getItem("city");
  cityListDiv.appendChild(citylistBtn);

  


    // var cityName= document.querySelector("#city-name");
    // var currentDate= document.querySelector("#current-date");
    // var icon= document.querySelector("#icon");
    // var temp= document.querySelector("#temp");
    // var wind= document.querySelector("#wind");
    // var humidity= document.querySelector("#humidity");
    // var uvIndex= document.querySelector("#un-index");

    // // console.log(cityName, currentDate, icon, temp, wind, humidity, uvIndex);

    // cityName.innerHTML= nameValue;
    // currentDate.innerHTML= "";
    // temp.innerHTML=tempValue;
    // wind.innerHTML= windValue;
    // humidity.innerHTML=humidityValue;
    // uvIndex.innerHTML=uV;





})








// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-openWeather-Key': '6a85d182a1673983bda2c1950cb9dd1e',
// 		'X-openWeather-Host': 'https://api.openweathermap.org'
// 	}
// };

// fetch("https://api.openweathermap.org/data/2.5/weather?q=", options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


    // function getWeather(city) {
    //     var apiUrl =
    //       "https://api.openweathermap.org/data/2.5/weather?q=" +
    //       city +
    //       "&units=imperial&appid=6a85d182a1673983bda2c1950cb9dd1e";
      
    //     var response = fetch(apiUrl);
    //     console.log(response);
    //     if (response.ok) {
    //       var data = response.json();
    //       var nameValue = data.name;
    //       var tempValue = data.main.temp;
    //       var humidityValue = data.main.humidity;
    //       var windValue = data.wind.speed;
    //       console.log(data);
    //       var lat = data.coord.lon;
    //       var lon = data.coord.lat;
    //       uvIndex(data.coord.lat, data.coord.lon);
    //       var icon = data.weather[0].icon;}
    //     }



