(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
        var planetsArray = planetsString.split('|');
        console.log(planetsArray);

    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *Makes it easier to view each planet and it looks cleaner
     * Don't really understand the point of using <br> tags in the console
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
        var newPlanetsStriing = "Mercury,Venus,Earth,Mars,Jupiter,Saturn,Uranus,Neptune";
        var newPlanetsArray = newPlanetsStriing.split(',');
        console.log(newPlanetsArray);
        var newPlanetsString2 = newPlanetsArray.join("<br>");
        // console.log(newPlanetsStriing);
    console.log(planetsArray.join("<br>"));
    var newPlanetsUnorderedList = newPlanetsString2.document.right


})();


