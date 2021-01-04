"use strict"

console.log("What's up!");

//No. 1

 function anArray (input){
     if(Array.isArray(input) === true){
         return true;
     }else {
         return false;
     }
 }




console.log(anArray([1, 2, 4, 0]));
console.log(anArray('w3resources'));

//No. 2

var arrayClone = function (input) {
    return input;
}

console.log(arrayClone([1,2,4,0]));

// var fruits = ['banana', 'apple', 'peach'];
// function isArray (input){
//     return Array.isArray(input) === true;
// }
// console.log(isArray("potato"));
// console.log(isArray(fruits));

