//Selected search input & btn using queryselector.
var searchInput= document.querySelector("#city")

var searchBtn= document.querySelector("#search-btn")

var arrSearch = [];
// Added an click event listener on a search button
searchBtn.addEventListener("click",function(event){

  event.preventDefault();
  
  //Setting value in local storage
  var searchInputValue= searchInput.value;

  arrSearch.push(searchInput.value)
  localStorage.setItem("city",  JSON.stringify(arrSearch));

  //Selecting a div and creating a div
  var formSearchDiv=  document.querySelector("#form-search-div")
  var cityListDiv= document.createElement("div");

  //Appending a div
  formSearchDiv.appendChild(cityListDiv);
  // creating a button using crealte element
  var citylistBtn=  document.createElement("button");

  //using setattribute setting a class and giving style 
  citylistBtn.setAttribute("class","city-list-btn");

  citylistBtn.setAttribute("style", "width:100%; margin-top:20px; background-color:rgb(45, 84, 255); color:white; padding: 6px 0px 6px 0px; border:rgb(45, 84, 255); cursor:pointer;");
  
  //Using the key getting the local storage value
  // citylistBtn.innerHTML= JSON.parse(localStorage.getItem("city"));
  
  

  
//Selected a div and stated an id statement on click
    var mainDataDiv= document.querySelector("#main-data-div")
    if(mainDataDiv.style.display==="none"){
      mainDataDiv.style.display="flex";
    }else{
      mainDataDiv.setAttribute("style","display:flex;");
    }

    
//Created a variable and andded api url and then using this variable in assigning url in fetch  
   var requestUrl= 'https://api.openweathermap.org/data/2.5/forecast?q='+searchInputValue+'&list=5&units=metric&appid=6a85d182a1673983bda2c1950cb9dd1e';
  
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //stored city name in a variable and then appended that value to button
      var cityNameInput= data.city.name;

      citylistBtn.innerHTML= cityNameInput;
      cityListDiv.appendChild(citylistBtn);

      //created a function if some one enters a wrong city name then it wont search 
      function error(error){
        if(searchInput!== cityNameInput){

        }
      }

      error(searchInput);

      citylistBtn.addEventListener("click", function(){

        uiGen(data,searchInput);
        
      })


      console.log(data);
    // Under fetch Selecting a h3 and assigning city value

    function uiGen(data, searchInput){
    var cityName= document.querySelector("h3");
    cityName.innerHTML= searchInputValue;
    var currentDate= document.querySelector("#current-date");
    // console.log(currentDate);
    //selecting elements using query selector
    var icon= document.querySelector("#icon-img");
    var temp= document.querySelector("#temp");
    var wind= document.querySelector("#wind");
    var humidity= document.querySelector("#humidity");
    var uvIndex= document.querySelector("#uv-index");
  
    //stored value in variables 
    var presentDate= data.list[0].dt_txt.split(" ")[0];
    var cityTemp= data.list[0].main.temp;
    // console.log(cityTemp);
    var cityWindSpeed= data.list[0].wind.speed;
    // console.log(cityWindSpeed)
    var cityHumidity= data.list[0].main.humidity;
    // console.log(cityHumidity)
    var tempIcon= data.list[0].weather[0].icon;


    // storing url for icons in a variable
    var iconurl = "http://openweathermap.org/img/w/" + tempIcon + ".png";
    // console.log(tempIcon) 
    icon.setAttribute("src",iconurl);
    
    //Adding value to the elements
    currentDate.innerHTML= presentDate;

    temp.innerHTML="Temp: " + cityTemp + "°C";
    wind.innerHTML= "Wind: " + cityWindSpeed + "MPH";
    humidity.innerHTML="Humidity: " + cityHumidity +"%";
    icon.innerHTML=tempIcon;
    // uvIndex.innerHTML=uV;


    
    // Selected elements using queryselector all and created empty array
    var futureDate = document.querySelectorAll(".futuree-date");
    var futureDateText = [];

    var futureTemp = document.querySelectorAll(".card-text-temp");
    var futureTempText=[];

    var futureWindSpeed=document.querySelectorAll(".card-text-wind");
    var futureWindSpeedText= [];

    var futureHumidity= document.querySelectorAll(".card-text-humidity");
    var futureHumidityText=[];

    var forecastIcon= document.querySelectorAll(".icon-img")
    var futureForecastIcon=[];
    // Created a for loop for fetching data for the next 5 days
    for (var i = 0; i < data.list.length; i = i + 8) {
      futureDateText.push(data.list[i].dt_txt.split(" ")[0]);
      futureTempText.push(data.list[i].main.temp);
      futureWindSpeedText.push(data.list[i].wind.speed);
      futureHumidityText.push(data.list[i].main.humidity);
      futureForecastIcon.push("http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png");

      console.log(futureForecastIcon);
    }

    //Created multiple for loops for adding forcast data in difference element
    for (var v = 0; v < futureDate.length; v++) {
      futureDate[v].innerHTML = futureDateText[v];
    }

    for( var t=0; t<futureTemp.length; t++){
      futureTemp[t].innerHTML="Temp: " + futureTempText[t] + "°C";
    }

    for(var w=0; w<futureWindSpeed.length; w++){
      futureWindSpeed[w].innerHTML= "Wind: " + futureWindSpeedText[w] + "MPH";
    }

    for( var h=0; h<futureHumidity.length; h++){
      futureHumidity[h].innerHTML="Humidity: " + futureHumidityText[h] +"%";
    }

    for(var ic=0; ic<forecastIcon.length; ic++){
      forecastIcon[ic].setAttribute("src",futureForecastIcon[ic]);
    }

  }

  uiGen(data,searchInput);

  });

})



