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



        $("#cardOneV2").append('<p class="card-header">' + weatherData.daily[0].dt + '</p>' + '<br>');
        $("#cardOneV2").append('<p>' + weatherData.daily[0].temp.max + ' / ' + weatherData.daily[0].temp.min + '</p>');
        $('#cardOneV2').append("Description: " + '<p>' + '<strong>' + weatherData.daily[0].weather[0].description + '</strong>' + '</p>');
        $("#cardOneV2").append('<p>' + 'Humidity: ' + '<strong>'+ weatherData.daily[0].humidity +'</strong>'   + '</p>');
        $("#cardOneV2").append('<p>' + 'Wind: ' + '<strong>'+ weatherData.daily[0].wind_deg +'</strong>' + '</p>');
        $("#cardOneV2").append('<p>' + 'Pressure: ' + '<strong>'+ weatherData.daily[0].pressure +'</strong>' + '</p>');

        $("#cardTwo").append('<p class="card-header">' + weatherData.daily[1].dt + '</p>'+ '<br>');
        $("#cardTwo").append('<p>' + weatherData.daily[1].temp.max + ' / ' + weatherData.daily[1].temp.min + '</p>');
        $('#cardTwo').append("Description: " +'<p>' + '<strong>' + weatherData.daily[1].weather[0].description + '</strong>' + '</p>');
        $("#cardTwo").append('<p>' + 'Humidity: '  + '<strong>'+ weatherData.daily[1].humidity +'</strong>' + '</p>');
        $("#cardTwo").append('<p>' + 'Wind: ' +'<strong>'+ weatherData.daily[1].wind_deg +'</strong>'+ '</p>');
        $("#cardTwo").append('<p>' + 'Pressure: '+ '<strong>' + weatherData.daily[1].pressure + '</strong>'   + '</p>');

        $("#cardThree").append('<p class="card-header">' + weatherData.daily[2].dt + '</p>'+ '<br>');
        $("#cardThree").append('<p>' + weatherData.daily[2].temp.max + ' / ' + weatherData.daily[2].temp.min + '</p>');
        $('#cardThree').append("Description: " +'<p>' + '<strong>' + weatherData.daily[2].weather[0].description +'</strong>' + '</p>');
        $("#cardThree").append('<p>' + 'Humidity: '  + '<strong>'+ weatherData.daily[2].humidity+ '</strong>'  + '</p>');
        $("#cardThree").append('<p>' + 'Wind: ' + '<strong>'+ weatherData.daily[2].wind_deg + '</strong>' + '</p>');
        $("#cardThree").append('<p>' + 'Pressure: ' + '<strong>' + weatherData.daily[2].pressure +'</strong>' + '</p>');

        $("#cardFour").append('<p class="card-header">' + weatherData.daily[3].dt + '</p>'+ '<br>');
        $("#cardFour").append('<p>' + weatherData.daily[3].temp.max + ' / ' + weatherData.daily[3].temp.min + '</p>');
        $('#cardFour').append("Description: " +'<p>' + '<strong>' + weatherData.daily[3].weather[0].description + '</strong>' + '</p>');
        $("#cardFour").append('<p>' + 'Humidity: '  + '<strong>' + weatherData.daily[3].humidity + '</strong>' + '</p>');
        $("#cardFour").append('<p>' + 'Wind: ' + '<strong>' + weatherData.daily[3].wind_deg + '</strong>' + '</p>');
        $("#cardFour").append('<p>' + 'Pressure: ' + '<strong>' + weatherData.daily[3].pressure + '</strong>' + '</p>');

        $("#cardFive").append('<p class="card-header">' + weatherData.daily[4].dt + '</p>'+ '<br>');
        $("#cardFive").append('<p>' + weatherData.daily[4].temp.max + ' / ' + weatherData.daily[4].temp.min + '</p>');
        $('#cardFive').append("Description: " +'<p>' + '<strong>' + weatherData.daily[4].weather[0].description + '</strong>' + '</p>');
        $("#cardFive").append('<p>' + 'Humidity: '  + '<strong>' + weatherData.daily[4].humidity + '</strong>' + '</p>');
        $("#cardFive").append('<p>' + 'Wind: '  + '<strong>' + weatherData.daily[4].wind_deg + '</strong>' + '</p>');
        $("#cardFive").append('<p>' + 'Pressure: ' + '<strong>' + weatherData.daily[4].pressure + '</strong>' + '</p>');



// fetch("http://api.openweathermap.org/data/2.5/onecall", {headers: {'Authorization': 'token 440cc6196dd546c7359e68b93b7d29fb'}})
//     .then(response => {response.json().then(forecast => {
//         console.log(forecast)
//             })
//         })





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