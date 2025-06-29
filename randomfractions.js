// Random fractions generator
function getRandomFraction() {
    return Math.random();
}
console.log("Random fraction:", getRandomFraction());

// Randon whole number generator
function getRandomWholeNumber(max) {
    return Math.floor(Math.random() * max);
}
console.log("Random whole number (0-9):", getRandomWholeNumber(10));

// Random number generator within a range
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random number in range (1-100):", getRandomNumberInRange(1, 100)); 
