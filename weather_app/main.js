var url = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=fc9497a01b3d4429206db1740442ef04&";

$(document).ready(function() {
  getLocation();
});

function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeather);
  }
}

function getWeather(position){
  url += "lon=" + position.coords.longitude + "&lat=" + position.coords.latitude;
  $.ajax({
    url: url,

    type: "GET",

    dataType: 'jsonp',

    cache: true,

    data: {
      format: "jsonp"
    },
    success: showWeather
  });

}

function showWeather(result){
  console.log(result);
  var city = result.city.name;
  var country = result.city.country;
  var weather = result.list[0].weather[0].description;
  var wind = parseInt(result.list[0].wind.speed) * 1.609344;
  var temp = Math.ceil(parseInt(result.list[0].main.temp) - 273.15);


  
  $("#basic").html("It's " + temp + "°C in " + city + ", " + country);
}
