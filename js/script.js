//Your api key
const apiKey = "";

function selectCountry() {

    //change national flag
    var countryVal = document.getElementById("countries").value;
    var src = 'https://www.countryflags.io/' + countryVal + '/flat/64.png';
    document.getElementById("national-flag").src = src;

    //shows weather
    var e = document.getElementById('countries');
    var country = e.options[e.selectedIndex].text;

    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + country + '&appid=' + apiKey,
        function(data) {
            console.log(data);


            //tempature
            var kelvin = data.main.temp;
            var celsius = kelvinToCelsius(kelvin);
            var degree = Math.round(celsius);

            //location
            var location = data.name;

            //icon
            var icon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

            //description
            var desc = data.weather[0].description;

            // increment element
            var text =
                '<img src="' + icon + '" alt="weather icon">' +
                '<h2><span>' + location + '</span> / <span>' + degree + '</span> &#8451; </h2>' +
                '<h2><span>' + desc + '</span></h2>';

            //increment to element
            $(".weather-info").html(text);

        });
}


//convert kelvin to celsius for openweaathermapAPI
function kelvinToCelsius(kelvin) {
    var converteCelsius = kelvin - 273.15;
    return converteCelsius;
}