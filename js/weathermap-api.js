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
var weatherData;

    //AJAX call to the OpenWeather API
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID, // API key
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function (data) {
        weatherData = data;
        console.log(weatherData);

        $("#cardOneV2").append('<p>' + weatherData.list[8].dt_txt + '</p>');
        $("#cardOneV2").append('<p>' + weatherData.list[8].main.temp_max + ' / ' + weatherData.list[0].main.temp_min + '</p>');
        $('#cardOneV2').append('<p>' + weatherData.list[8].weather[0].description + '</p>');
        $("#cardOneV2").append('<p>' + weatherData.list[8].main.humidity + '</p>');
        $("#cardOneV2").append('<p>' + weatherData.list[8].wind.deg + '</p>');
        $("#cardOneV2").append('<p>' + weatherData.list[8].main.pressure + '</p>');


        $("#cardTwo").append('<p>' + weatherData.list[8].dt_txt + '</p>');
        $("#cardTwo").append('<p>' + weatherData.list[8].main.temp_max + ' / ' + weatherData.list[0].main.temp_min + '</p>');
        $('#cardOne').append('<p>' + weatherData.list[8].weather[0].description + '</p>');
        $("#cardTwo").append('<p>' + weatherData.list[8].main.humidity + '</p>');
        $("#cardTwo").append('<p>' + weatherData.list[8].wind.deg + '</p>');
        $("#cardTwo").append('<p>' + weatherData.list[8].main.pressure + '</p>');


        $("#cardThree").append('<p>' + weatherData.list[16].dt_txt + '</p>');
        $("#cardThree").append('<p>' + weatherData.list[16].main.temp_max + ' / ' + weatherData.list[0].main.temp_min + '</p>');
        $('#cardOne').append('<p>' + weatherData.list[16].weather[0].description + '</p>');
        $("#cardThree").append('<p>' + weatherData.list[16].main.humidity + '</p>');
        $("#cardThree").append('<p>' + weatherData.list[16].wind.deg + '</p>');
        $("#cardThree").append('<p>' + weatherData.list[16].main.pressure + '</p>');


        $("#cardFour").append('<p>' + weatherData.list[24].dt_txt + '</p>');
        $("#cardFour").append('<p>' + weatherData.list[24].main.temp_max + ' / ' + weatherData.list[0].main.temp_min + '</p>');
        $('#cardOne').append('<p>' + weatherData.list[24].weather[0].description + '</p>');
        $("#cardFour").append('<p>' + weatherData.list[24].main.humidity + '</p>');
        $("#cardFour").append('<p>' + weatherData.list[24].wind.deg + '</p>');
        $("#cardFour").append('<p>' + weatherData.list[24].main.pressure + '</p>');


        $("#cardFive").append('<p>' + weatherData.list[32].dt_txt + '</p>');
        $("#cardFive").append('<p>' + weatherData.list[32].main.temp_max + ' / ' + weatherData.list[0].main.temp_min + '</p>');
        $('#cardOne').append('<p>' + weatherData.list[24].weather[0].description + '</p>');
        $("#cardFive").append('<p>' + weatherData.list[32].main.humidity + '</p>');
        $("#cardFive").append('<p>' + weatherData.list[32].wind.deg + '</p>');
        $("#cardFour").append('<p>' + weatherData.list[32].main.pressure + '</p>');










        // $("#listOne").append('<p>' + weatherData.daily[0].humidity + '</p>')



        // $.each(data.list,function (index,item) {
        //     if (index % 8 == 0) {
        //         // $('ul').append('<li>' + item.dt_txt + '</li>');
        //         console.log(data);
                // console.log(data.list[1],0,item.dt_txt);
                // console.log(0,item.dt_txt);
                // console.log(item);
                // console.log(0,item.dt_txt);


                // $('.card-body').find('.item-dt').append(item[0].dt_txt);
                // $('.card-body').find('.item-temp-max').append(item[0].main.temp_max);
                // $('.card-body').find('.item-humidity').append(item[0].main.humidity);
                // $('.card-body').find('.item-wind').append(item.wind[0].deg)
        //     }
        // })
        // $.each(data.list,function (index,item) {
        //     if(index % 8 == 0){
        //         $('ul').append('<li>' + item.main.temp_max + '/' + item.main.temp_min + '</li>');
        //     }
        // })
        // console.log('5 day forecast',data);

    });
//
//     $("listOne").append(weatherData.daily[0].dt)
        // let iconUrl = <img src="http://openweathermap.org/img/wn/' data.weather[0].icon + "02x.png"'>

    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.4916, 29.4252],
        zoom: 9,
    });
});