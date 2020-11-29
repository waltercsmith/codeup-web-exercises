"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 */


//TODO: Define a function named isOdd that takes in any input and returns true if the input is an odd number, return false for any other situation. You do not need to consider floating-point and decimal numbers.

function isOdd(num) {
    if(num == Number(num) && num % 2 === 1)
        return true;
    else {
        return false;
    }
}

//TODO: Define a function named isVowel that takes in a single character and returns true if the character is a vowel. *Not including the letter 'y'
function isVowel(vowel) {
    if(vowel === null){
        return false;
    }else if(vowel.length === 1 && vowel === 'e' || vowel === 'a' || vowel === 'i' || vowel === 'o' || vowel === 'u' || vowel === 'I'){
        return true;
    }
    else {
        return false;
    }

}

//TODO: Define a function named combineStrings that takes in two parameters, if both parameters are strings, then return a concatenated string of both parameters. Otherwise, return false.
function combineStrings(string1,string2) {
    if(typeof string1=== 'string' && typeof string2 === 'string'){
        return string1 + string2;
    }else {
        return false;
    }

}

//TODO: Define a function named sumArgs that takes in three parameters, if they are numbers then add them together. Otherwise return false.
function sumArgs(num1,num2,num3) {

    if (isNaN(parseInt(num1)) && isNaN(parseInt(num2)) && isNaN(parseInt(num3))){
        return NaN;
    } else if(typeof num1 == "string" || typeof num2 == "string" || typeof num3 == "string"){
        return false;
    } else if (typeof num1 == "boolean" || typeof num2 == "boolean" || typeof num3 == "boolean"){
        return false;
    } else if (num1 === null ||  num2 === null ||  num3 === null){
        return false;
    } else if ( typeof num1 === "object" || typeof num2 === "object" || typeof num3 === "object"){
        return false;
    } else if (parseInt(num1) && parseInt(num2) && parseInt(num3)){
        return num1 + num2 + num3;
    }
}


//TODO: Define a function named truncateString that takes in a string as the first parameter and a number as the second parameter. Truncate (shorten) the string by the length based on the argument passed in. For example, truncateString("hello world",1) would return "hello worl"
function truncateString(str,num) {
    if(typeof str === "string" && parseInt(num)){
        return str.slice(0,-num);
    } else {
        return false;
    }
}

//TODO: Define a function named `reverseSign` that takes in a number as the first parameter. Reverse the sign of the argument passed in, return false if the argument is not a number. For example, `reverseSign(1)` would return `-1`.
function reverseSign(num) {
    if(parseInt(num)) {
        return -num;
    }else {
        return false;
    }
}

//TODO: Define a function named `makeUppercase` that takes in a string as the first parameter. Return the argument passed in entirely uppercased, return false if the argument is not a string. For example, `makeUppercase("test")` would return `"TEST"`.
function makeUppercase(str) {
    if(typeof str === "string" && isNaN(str)){
        return str.toUpperCase();
    }else {
        return false;
    }
}

//TODO: Define a function named `isMultiple` that takes in two `number` parameters. Return `true` if one argument is a multiple of the other, `false` otherwise. For example, `isMultiple(2, 6)` would return `true`.
function isMultiple(num1,num2) {
    if (num1 === num2){
        return false;
    }
    else if (num1 % num2 === 0 || num2 % num1 === 0 ){
        return true;
    }else {
        return false;
    }

}

//TODO: Define a function named `canPurchase` that takes in two `number` parameters, `billAmount` & `availableCash`. Return `true` if `availableCash` is greater than `billAmount`, `false` otherwise. For example, `canPurchase(10, 20)` would return `true`.
function canPurchase(billAmount, availableCash) {
    if (availableCash > billAmount){
        return true;
    } else {
        return false;
    }
}

//TODO: Define a function named `getInitials` that takes in two `string` parameters, `first` & `last`. Return the names combined and formatted as initials, return `false` if either parameter is invalid. For example, `getInitials("John", "Snow")` would return `"J.S."`
