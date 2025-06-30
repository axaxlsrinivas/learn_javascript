// Use getter and setter to control access to an object property
class Book {
    constructor(author) {
        this._author = author; // Using underscore to indicate a private property   
    }

    // Getter method to access the private property
    get author() {
        return this._author;
    }

    // Setter method to modify the private property
    set author(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

// Example usage 
function makeClass() {
    class Thermostat {
        constructor(fahrenheit) {
            this._fahrenheit = fahrenheit; // Private property to store temperature in Fahrenheit
        }

        // Getter method to convert Fahrenheit to Celsius
        get temperature() {
            return (5 / 9) * (this._fahrenheit - 32);
        }

        // Setter method to convert Celsius to Fahrenheit
        set temperature(celsius) {
            this._fahrenheit = (celsius * 9.0) / 5 + 32;
        }
    }
    return Thermostat;
};

const Thermostat = makeClass();
const thermos = new Thermostat(76); // Setting initial temperature to 76 degrees Fahrenheit
let temp = thermos.temperature; // Getting the current temperature
thormos.temperature = 26; // Setting the temperature to 26 degrees Celsius
temp = thermos.temperature; // Getting the updated temperature
console.log(temp); // Output: 26