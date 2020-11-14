"use strict"
//Exercise 2


function showMultiplicationTable(x) {
    // var mathString = x * i;
    for( i = 1; i < 11; i++){
        console.log(x + ' x ' + i + ' = ' +  i * x);
    }
}

showMultiplicationTable(7)



//Exercise 3
// var randomNumber = Math.floor(Math.random(10) * Math.floor(199));
var stopAtNumber = 10;
//DO NOT EXECUTE THIS CODE!!!

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
    for(i = 0; i < 10; i++){

        if(getRandomInt(1,199) % 2 == 0){
            console.log(getRandomInt(1,199) + ' is even');
        }else {
            console.log(getRandomInt(1,199) + ' is odd');
        }

    }

//Exercise 4

// function repeatNumber(x,y) {
//         return x + y;
// }

    for(var i = 1; i < 10; i++) {

            console.log(i.toString().repeat(i));
        }

//Exercise 5

    for(i = 100; i > 0; i-= 5){
            console.log(i);
    }


function loopFunction(){
        for(i = 1; i < 10; i++){
            console.log('This is loop number: ');
        }
        console.log('This looped ' + i + ' times!');
}

