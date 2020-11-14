var i = -10;
while(i < 10){
    console.log('while loop iteration #' + i);
    i++
}


var i = 0;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
    if (i == 8){break};

}

var i = -10;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
    if (i == 9){break};

}
    console.log("we stopped at number: " + i);