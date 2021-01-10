"use strict"


$(document).ready(function () {
    // var data = [
    //     {dt_txt:"2021-01-10 15:00:00", main: {temp_max:43.95, temp_min:42.38, humidity:94}, wind: {deg:49} pressure:1022},
    //     {dt_txt:"2021-01-11 15:00:00", main: {temp_max:43.95, temp_min:42.38, humidity:94}, wind: {deg:49} pressure:1022},
    //     {dt_txt:"2021-01-10 15:00:00", main: {temp_max:43.95, temp_min:42.38, humidity:94}, wind: {deg:49} pressure:1022},
    //     {dt_txt:"2021-01-10 15:00:00", main: {temp_max:43.95, temp_min:42.38, humidity:94}, wind: {deg:49} pressure:1022},
    //     {dt_txt:"2021-01-10 15:00:00", main: {temp_max:43.95, temp_min:42.38, humidity:94}, wind: {deg:49} pressure:1022},
    //
    //
    //
    //
    //     ]

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
                $('.card-body').find('.item-dt').append(item.dt_txt);
                $('.card-body').find('.item-temp-max').append(item.main.temp_max);
                $('.card-body').find('.item-humidity').append(item.main.humidity);
                $('.card-body').find('.item-wind').append(item.wind.deg)




                // $('#forecast').append("<tr><td>" + item.dt + '</td>' + "<td>" + item.main.temp_max + "/" + item.main.temp_min + "</td>" + "<td>" + item.main.humidity + "</td>" + "<td>" + item.wind.deg + "</td>" + "<td>" + item.main.pressure)
                // $("#forecast").append("<tr><td>" + item.main.temp + "</td>" + "<td>" + item.name + "</td>" + "<td>" + item.population + "</td>" + "<td>" + item.timezone)
            }
        })
        console.log('5 day forecast',data);

    });
//
        // let iconUrl = <img src="http://openweathermap.org/img/wn/' data.weather[0].icon + "02x.png"'>

    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.4916, 29.4252],
        zoom: 9,
    });
});