var x = 2;

while(x < 65536){
    console.log(x);
    x = x * 2;
}




var allCones = Math.floor(Math.random() * 50) + 50;

console.log("I have this many cones to sell: " + allCones);

do {
    var conesPurchased = Math.floor(Math.random() * 5) + 1;
    if(conesPurchased > allCones){
        console.log("Can't sell you these number of cones: " + conesPurchased);
    }else{
        allCones = allCones - conesPurchased;
        console.log(conesPurchased + " is the number of cones you wanted");
    }
} while(allCones >  0)

console.log("Yeah, I sold all of my ice cream.");

// Math.floor(Math.random() * 5) + 1;