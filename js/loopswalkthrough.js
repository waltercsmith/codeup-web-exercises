function showMultiplicationTable(num) {
        for(var i = 1; i <= 10; i++){
            console.log(num + " x " +  i + ' = ' + (num * i));
        }
}


////////
for(var i = 0; i < 10; i++){
    var randomNum = Math.floor(Math.random() *
        (200 - 20) + 20)
    if(randomNum % 2 === 0){
        console.log(randomNum + ' is Even');
    } else{
        console.log(randomNum + ' is Odd')
    }
}

///////
for(var outer = 1; outer <= 9; outer++){
    var output = '';

    for(var inner = 1; inner <= outer; inner++){
        output = output + outer;
    }

    console.log(output);
}

/////

for(var i = 100; i >= 5; i -= 5){
    console.log(i);
}

////////
while(isNan(userNum) || (userNum % 2 !== 0) || (userNum < 1) || (userNum > 50)){
    var userNum = prompt("Please enter an odd number between 1 and 50")}

console.log("Number to skip is: " + userNum);

for(var i = 1; i < 50; i++){
    if( i == userNum){
        console.log("Yikes: Skipping number: " + i);
        continue;
    } else if(i % 2 === 2){
        continue;
    } else{
        console.log("Here's an odd number: " + i);
    }
}



