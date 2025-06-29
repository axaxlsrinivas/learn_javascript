// Arrow functions to write concise anonymous functions in JavaScript
var magic = function() {
    return new Date();
}

// Arrow function syntax for the above function
// The arrow function syntax is a more concise way to write functions in JavaScript.
var magicArrow = () => new Date();

// Arrow function with parameters
var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]

// Wirte higher order functions using arrow functions
const realNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredIntegers = realNumberArray.map(x => x * x);
console.log(squaredIntegers); // Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100] 


