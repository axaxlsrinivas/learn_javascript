// Create string using template literals
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // Hello, my name is Zodiac Hasbro! I am 56 years old.

// Create a list of items from an array using template literals
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

// The function should return an array of strings, each string being a list item with a class
function makeList(arr) {
    "use strict";
    // Only change code below this line
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    // Only change code above this line
    return resultDisplayArray;
}

const failuresList = makeList(result.failure);
console.log(failuresList); 
/* [ '<li class="text-warning">no-var</li>', 
    '<li class="text-warning">var-on-top</li>', 
    '<li class="text-warning">linebreak</li>' ]
 */

// Write concise object literal declarations using simple fields
const createPerson = (name, age, gender) => {
    "use strict";
    // Only change code below this line
    return {
        name : name,
        age : age,
        gender: gender
    };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));
// { name: 'Zodiac Hasbro', age: 56, gender: "male" }

// Write concise object literal declarations using simple fields (ES6)
// This is a more concise way to write the same function
const createPerson1 = (name, age) => ({ name, age });
console.log(createPerson1("Zodiac Hasbro", 56)); // { name: 'Zodiac Hasbro', age: 56 }