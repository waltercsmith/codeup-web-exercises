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
            if (index % 8 == 0) {
                $('ul').append('<li>' + item.dt_txt + '</li>');
                console.log(item.dt_txt);


                // $('.card-body').find('.item-dt').append(item[0].dt_txt);
                // $('.card-body').find('.item-temp-max').append(item[0].main.temp_max);
                // $('.card-body').find('.item-humidity').append(item[0].main.humidity);
                // $('.card-body').find('.item-wind').append(item.wind[0].deg)
            }
        })
        $.each(data.list,function (index,item) {
            if(index % 8 == 0){
                $('ul').append('<li>' + item.main.temp_max + '/' + item.main.temp_min + '</li>');
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