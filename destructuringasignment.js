// Use destructuring asignment to assign variables from objects
var voxel = {
    x: 3.6,
    y: 7.4,
    z: 6.54
};

// Not recommended way
var x = voxel.x; // 3.6
var y = voxel.y; // 7.4
var z = voxel.z; // 6.54

// Destructuring syntax
const { x: a, y: b, z: c } = voxel;

const AVERAGE_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79.5
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // Only change code below this line
    const { tomorrow: tempOfTomorrow } = avgTemperatures;
    // Only change code above this line
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVERAGE_TEMPERATURES)); // 79.5

// Destructuring assignment with nested objects
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";
    // Only change code below this line
    const { tomorrow: { max: maxOfTomorrow } } = forecast;
    // Only change code above this line
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST)); // 84.6

// Destructuring assignment to assign variables from arrays
const [z, x, y] = [1, 2, 3];
console.log(z, x, y); // 1 2 3

let a1 = 8, b1 = 6;
(() => {
    "use strict";
    [a1, b1] = [b1, a1]; // Swapping values using destructuring
})();
console.log(a1, b1); // 6 8

// Destructuring assignment with the rest operator
const source = [1, 2, 3, 4, 5];
function removeFirstTwo(list) {
    "use strict";
    // Only change code below this line
    const [, , ...arr] = list; // Skip first two elements
    // Only change code above this line
    return arr;
}
console.log(removeFirstTwo(source)); // [3, 4, 5]
console.log(source); // [1, 2, 3, 4, 5] (original array remains unchanged)

// Use destructuring assignment to pass an object as a function parameter
// This is used for api calls where you want to pass an object with multiple properties
// and destructure it in the function to use only the required properties.
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {
    "use strict";
    return function half({ max, min }) {
        // Only change code below this line
        return (max + min) / 2.0;
        // Only change code above this line
    };
})();
console.log(stats); // { max: 56.78, standard_deviation: 4.34, median: 34.54, mode: 23.87, min: -0.75, average: 35.85 }
console.log(half(stats)); // 28.015 (average of max and min)