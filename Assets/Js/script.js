
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
  

  

    var mainDataDiv= document.querySelector("#main-data-div")
    if(mainDataDiv.style.display==="none"){
      mainDataDiv.style.display="flex";
    }else{
      mainDataDiv.setAttribute("style","display:flex;");
    }
   var requestUrl= 'https://api.openweathermap.org/data/2.5/forecast?q='+searchInputValue+'&list=5&units=metric&appid=6a85d182a1673983bda2c1950cb9dd1e';
  // var requestUrl= "https://api.openweathermap.org/data/2.5/weather?q=" +
  // searchInputValue +
  // "&units=metric&appid=6a85d182a1673983bda2c1950cb9dd1e";  
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      console.log(data);

   var fiveDayData= data.daily;
   console.log(fiveDayData)


    var cityName= document.querySelector("h3");
    cityName.innerHTML= searchInputValue;
    var currentDate= document.querySelector("#current-date");
    // console.log(currentDate);
    var icon= document.querySelector("#icon");
    var temp= document.querySelector("#temp");
    var wind= document.querySelector("#wind");
    var humidity= document.querySelector("#humidity");
    var uvIndex= document.querySelector("#un-index");

    // // console.log(cityName, currentDate, icon, temp, wind, humidity, uvIndex);

  

    var presentDate= data.list[0].dt_txt;
    var cityTemp= data.list[0].main.temp;
    // console.log(cityTemp);
    var cityWindSpeed= data.list[0].wind.speed;
    // console.log(cityWindSpeed)
    var cityHumidity= data.list[0].main.humidity;
    // console.log(cityHumidity)
    var tempIcon= data.list[0].weather[0].icon;

    var urlll= "http://openweathermap.org/img/wn/";
    // console.log(tempIcon) 
    currentDate.innerHTML= presentDate;

    temp.innerHTML="Temp: " + cityTemp + "°C";
    wind.innerHTML= "Wind: " + cityWindSpeed + "MPH";
    humidity.innerHTML="Humidity: " + cityHumidity +"%";
    icon.innerHTML=tempIcon;
    // uvIndex.innerHTML=uV;

    
   for(var i=0; i<data.list.length; i= i+8){
    var futureDate= document.querySelector(".futuree-date");
    console.log(futureDate);

    for( var v= 0; v<futureDate.length; v++){
      
    }

    var vv= data.list[i].dt_txt;

    console.log(vv);

  futureDate.innerHTML= vv;
     }

  });

})

