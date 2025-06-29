// Difference between the var and let keywords in JavaScript
// var is function-scoped or globally scoped, while let is block-scoped.
let catName = "Whiskers";
let quote;

catName = "Mittens"; // Reassigning the variable

function catTalk() {
    "use strict";

    catName = "Shadow"; // This will throw an error in strict mode if catName is not defined in the global scope
    quote = catName + " Meow!";
    return quote;
};
//console.log(catTalk()); // Output: "ShadowMeow!"

// Compare scope of var and let
function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Inside if block: ", i); // Output: "Inside if block: block scope"
    }
    console.log("Outside if block: ", i); // Output: "Outside if block: function scope"
    return i
};
checkScope(); // Call the function to see the output

// Declare a Read-Only variable with the const keyword
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    //SENTENCE = str + " is awesome!"; // This will throw an error because SENTENCE is a constant
    // Uncommenting the line above will cause an error
    for (let i = 0; i < str.length; i++) {
        console.log(SENTENCE);
    }
}
printManyTimes("FreeCodeCamp"); // Call the function to see the output

// Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    // s = [2, 5, 7]; // This will throw an error because s is a constant
    // Uncommenting the line above will cause an error
    s[0] = 2; // This is allowed because we are mutating the array, not reassigning it
    s[1] = 5;
    s[2] = 7;
    return s; // Returns the modified array
}
console.log(editInPlace()); // Call the function to see the output  

// Prevent Object Mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); // Freezes the object to prevent mutation
    
    try {
        MATH_CONSTANTS.PI = 3.14159; // Attempting to change the value of PI
    } catch (error) {
        console.error("Error: Cannot change a constant value", error);
    }

    // MATH_CONSTANTS.PI = 3.14159; // This will throw an error because MATH_CONSTANTS is a constant
    // Uncommenting the line above will cause an error
    
    return MATH_CONSTANTS.PI; // Returns the value of PI
}
console.log(freezeObj()); // Call the function to see the output