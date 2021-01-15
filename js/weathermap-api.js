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
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID, // API key
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function (data) {
        weatherData = data;
        console.log(weatherData);

        $("#cardOneV2").append('<p>' + weatherData.daily[0].dt + '</p>');
        $("#cardOneV2").append('<p>' + weatherData.daily[0].temp.max + ' / ' + weatherData.daily[0].temp.min + '</p>');
        $('#cardOneV2').append("Description: " + '<p>' + weatherData.daily[0].weather[0].description + '</p>');
        $("#cardOneV2").append('<p>' + weatherData.daily[0].humidity + '</p>');
        $("#cardOneV2").append('<p>' + weatherData.daily[0].wind_deg + '</p>');
        $("#cardOneV2").append('<p>' + weatherData.daily[0].pressure + '</p>');

        $("#cardTwo").append('<p>' + weatherData.daily[1].dt + '</p>');
        $("#cardTwo").append('<p>' + weatherData.daily[1].temp.max + ' / ' + weatherData.daily[1].temp.min + '</p>');
        $('#cardTwo').append('<p>' + weatherData.daily[1].weather[0].description + '</p>');
        $("#cardTwo").append('<p>' + weatherData.daily[1].humidity + '</p>');
        $("#cardTwo").append('<p>' + weatherData.daily[1].wind_deg + '</p>');
        $("#cardTwo").append('<p>' + weatherData.daily[1].pressure + '</p>');

        $("#cardThree").append('<p>' + weatherData.daily[2].dt + '</p>');
        $("#cardThree").append('<p>' + weatherData.daily[2].temp.max + ' / ' + weatherData.daily[2].temp.min + '</p>');
        $('#cardThree').append('<p>' + weatherData.daily[2].weather[0].description + '</p>');
        $("#cardThree").append('<p>' + weatherData.daily[2].humidity + '</p>');
        $("#cardThree").append('<p>' + weatherData.daily[2].wind_deg + '</p>');
        $("#cardThree").append('<p>' + weatherData.daily[2].pressure + '</p>');

        $("#cardFour").append('<p>' + weatherData.daily[3].dt + '</p>');
        $("#cardFour").append('<p>' + weatherData.daily[3].temp.max + ' / ' + weatherData.daily[3].temp.min + '</p>');
        $('#cardFour').append('<p>' + weatherData.daily[3].weather[0].description + '</p>');
        $("#cardFour").append('<p>' + weatherData.daily[3].humidity + '</p>');
        $("#cardFour").append('<p>' + weatherData.daily[3].wind_deg + '</p>');
        $("#cardFour").append('<p>' + weatherData.daily[3].pressure + '</p>');

        $("#cardFive").append('<p>' + weatherData.daily[4].dt + '</p>');
        $("#cardFive").append('<p>' + weatherData.daily[4].temp.max + ' / ' + weatherData.daily[4].temp.min + '</p>');
        $('#cardFive').append('<p>' + weatherData.daily[4].weather[0].description + '</p>');
        $("#cardFive").append('<p>' + weatherData.daily[4].humidity + '</p>');
        $("#cardFive").append('<p>' + weatherData.daily[4].wind_deg + '</p>');
        $("#cardFive").append('<p>' + weatherData.daily[4].pressure + '</p>');











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