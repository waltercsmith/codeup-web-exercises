"use strict"


$(document).ready(function () {
    //AJAX call to the OpenWeather API
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID, // API key
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function (data) {
        console.log(data)
        $.each(data.list,function (index,item) {
            console.log(item)
            if (index % 8 == 0) {
                $('#forecast').append("<tr><td>" + item.dt + '</td>' + "<td>" + item.main.temp_max + "/" + item.main.temp_min + "</td>" + "<td>" + item.main.humidity + "</td>" + "<td>" + item.main.wind + "</td>" + "<td>" + item.main.pressure)
                // $("#forecast").append("<tr><td>" + item.main.temp + "</td>" + "<td>" + item.name + "</td>" + "<td>" + item.population + "</td>" + "<td>" + item.timezone)
            }
        })
        console.log('5 day forecast',data);
    });

        // let iconUrl = <img src="http://openweathermap.org/img/wn/' data.weather[0].icon + "02x.png"'>

    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.4916, 29.4252],
        zoom: 9,
    });
});