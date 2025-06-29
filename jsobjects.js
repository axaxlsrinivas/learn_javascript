// Build Java script objects
var myInfo = {
    "name": "Rex",
    "age": 5,
    "breed": "Golden Retriever",
    "friends": ["Buddy", "Max", "Bella"],
    "isTrained": true
};

// Access and modify properties
myInfo.name = "Rexy"; // Update name
myInfo.age += 1; // Increment age

// Add new properties
myInfo["color"] = "Golden"; // Add new property
myInfo.friends.push("Charlie"); // Add a new friend

// Delete a property
delete myInfo.breed; // Remove breed property

// Output the object and its properties
console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo["age"]);
console.log(myInfo.friends[0]); // Access first friend
console.log(myInfo.isTrained ? "Rexy is trained." : "Rexy is not trained.");
console.log("Rexy's color is " + myInfo.color + ".");

// Function to look up phonetic alphabet
// This function takes a letter and returns its phonetic representation 
function phoneticLookup(val) {
    var result = "";

    // Define the phonetic alphabet mapping
    var phoneticAlphabet = {
        "A": "Alfa",
        "B": "Bravo",
        "C": "Charlie",
        "D": "Delta",
        "E": "Echo",
        "F": "Foxtrot",
        "G": "Golf",
        "H": "Hotel",
        "I": "India",
        "J": "Juliett",
        "K": "Kilo",
        "L": "Lima",
        "M": "Mike",
        "N": "November",
        "O": "Oscar",
        "P": "Papa",
        "Q": "Quebec",
        "R": "Romeo",
        "S": "Sierra",
        "T": "Tango",
        "U": "Uniform",
        "V": "Victor",
        "W": "Whiskey",
        "X": "X-ray",
        "Y": "Yankee",
        "Z": "Zulu"
    };
    result = phoneticAlphabet[val.toUpperCase()] || `Value does not exist: ${val}`; 
    
    // Return the phonetic representation or the original value
    return result;
}

console.log(phoneticLookup("AA")); // Outputs: Value does not exist: AA
console.log(phoneticLookup("A")); // Outputs: Alfa
console.log(phoneticLookup("B")); // Outputs: Bravo

// Function to check if a property exists in an object
// This function checks if a property exists in the object and returns its value or "Not Found"
// If the property does not exist, it returns "Not Found"
var myObject = {
    gift: "Dog",
    pet: "Cat",
    bird: "Parrot",
    fish: "Goldfish"
};

function checkProperty(checkProp) {
    if (myObject.hasOwnProperty(checkProp)) {
        return myObject[checkProp];
    } else {
        return "Not Found";
    }
}
console.log(checkProperty("gift")); // Outputs: Dog
console.log(checkProperty("pet")); // Outputs: Cat
console.log(checkProperty("bird")); // Outputs: Parrot
console.log(checkProperty("fish")); // Outputs: Goldfish
console.log(checkProperty("reptile")); // Outputs: Not Found

// Nested objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs",
            "back seat": "seat covers"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"]; 
// Accessing nested object
console.log(gloveBoxContents); // Outputs: maps

// Nested arrays
var myPlants = [
    {
        "type": "flowers",
        "list": ["rose", "tulip", "daisy"]
    },
    {
        "type": "trees",
        "list": ["oak", "maple", "pine"]
    }
];
var secondTree = myPlants[1].list[1];
// Accessing nested array
console.log(secondTree); // Outputs: maple