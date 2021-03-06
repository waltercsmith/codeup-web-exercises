/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).


// Initialize the mapbox
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4916, 29.4252],
    zoom: 9,
});

//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]
//Completed & Added: center and zoom
//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~15 minutes)
/*Changed the style to outdoors-v11: Displays a more "outdoorsy" look

 */

/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.


var marker = new mapboxgl.Marker({
    color: '#cb3e6b',
    draggable:true,
})
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);


// TODO TOGETHER: Change the color of the marker
//Changed the color of the marker

// TODO: Experiment with the color, and setting the LngLat
//Adjusted the LngLat setting

// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!
//Marker object made to draggable

/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"
//Changed the background and content color

// var popup = new mapboxgl.Popup({className:'popup-color'})
//     .setLngLat([-98.48953338691301, 29.42700060876315])
//     .setHTML("<p>Codeup Rocks!</p>")
//     .addTo(map);


// TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.


var alamoPopup = new mapboxgl.Popup({className:'alamoPopup'})
    .setHTML("<p>Remember the Alamo!</p>")
        .addTo(map);
marker.setPopup(alamoPopup);


// TODO: Review the popup docs. What are some additional options we can pass to the popup?
/* Some additonal options that we can pass to the popup are:
    maxWidth

 */


// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"



/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding

// let searchString = prompt("Choose an location:");

// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.
// geocode(searchString, mapboxToken).then(function (result){
//     console.log(result);
//     map.setCenter(result);
//     map.setZoom(5);
//     marker.setLngLat(result);

// })


//TODO: Using the geocode method above, add a marker at Codeup to the map

// var marker2 = new mapboxgl.Marker({
//     color: '#098ab1',
//     draggable:true,
// })
//     .setLngLat([-80.21158038916252, 26.05107633186713])
//
//     .addTo(map);


//TODO: Instead of setCenter try using map.jumpTo()

// geocode(searchString,mapboxToken).then(function (result) {
//
//     map.jumpTo({
//         center: [0, 0],
//         zoom: 8,
//     })
//         .setLngLat([-98.4916, 29.4260])
//
//         .addTo(map);
// })

//TODO: Instead of setCenter try using map.flyTo()
// geocode(searchString,mapboxToken).then(function (result){
// map.flyTo({
//     zoom: 8,
// })
//     .setLngLat([-98.4916, 29.4260])
//
//     .addTo(map);
// })




// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo
// TODO: Reverse geocode coordinates of your choice using the reverse geocode method


