let weather = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=Bo2eoe3z7pXFlTeZLRFGkCJXxITS9tSq&q="
let weather_end = "&details=true"

let img = "https://pixabay.com/api/?key=8814402-dfba581d7d4bbd350ea0d6f8b&q=";
let img_end = "&image_type=photo&pretty=true";

$(document).ready(function() {
  getLocation();
});

function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeather);
  }
}

function getWeather(position){
  weather += position.coords.latitude + "%2C" + position.coords.longitude + weather_end;
  $.ajax({
    url: weather,

    type: "GET",

    dataType: 'jsonp',

    cache: true,

    success: showWeather
  });

}

function getImage(city){
  img += city + img_end;
  console.log(img);
  $.ajax({
    url: img,

    type: "GET",

    dataType: 'jsonp',

    cache: true,

    success: showImage
  });
}

function showWeather(result){
  console.log(result);
  var city = result.AdministrativeArea.EnglishName;
  // var country = result.city.country;
  // var weather = result.list[0].weather[0].description;
  // var wind = parseInt(result.list[0].wind.speed) * 1.609344;
  // var temp = Math.ceil(parseInt(result.list[0].main.temp) - 273.15);


  
  // $("#basic").html("It's " + temp + "°C in " + city + ", " + country);
  getImage(city);
}

function showImage(images){
  console.log(images.hits[0]);
}