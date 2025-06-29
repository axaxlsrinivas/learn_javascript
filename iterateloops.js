// While Loops
var myArray = [];

var i = 0;
// This loop will run as long as i is less than 10
while(i < 10) {
    myArray.push(i);
    i++;
}   
console.log("While Loop Result:", myArray);

// For Loops
var ourArray = [];

for(var j = 0; j < 10; j++) {
    ourArray.push(j);
}
console.log("For Loop Result:", ourArray);

// Iterate Odd Numbers with a For Loop
var oddArray = [];

for(var k = 1; k < 10; k += 2) {
    oddArray.push(k);
}
console.log("Odd Numbers with For Loop:", oddArray);

// Iterate Even Numbers with a For Loop
var evenArray = [];

for(var l = 0; l < 10; l += 2) {
    evenArray.push(l);
}
console.log("Even Numbers with For Loop:", evenArray);

// Nesting For Loops
var nestedArray = [];

for(var m = 0; m < 3; m++) {
    for(var n = 0; n < 3; n++) {
        nestedArray.push(`Outer: ${m}, Inner: ${n}`);
    }
}
console.log("Nested For Loop Result:", nestedArray);

// Iterate with a For Loop using Array.length
function multiplyAll(arr) {
    var product = 1;
    for(var o = 0; o < arr.length; o++) {
        for(var p = 0; p < arr[o].length; p++) {
            product *= arr[o][p];
        }
    }
    return product;
}   
var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log("Product of All Elements:", product);

// Iterate with Do...While Loop
var doWhileArray = [];
var q = 10;

do {
    doWhileArray.push(q);
    q++;
} while(q < 5);
console.log("Do...While Loop Result:", q, doWhileArray);