// Conditional (Ternary) Operator
// The conditional operator is a shorthand for an if-else statement.
function checkEquality(a, b) {
    return a === b ? "Equal" : "Not Equal";
}
console.log(checkEquality(5, 5)); // Output: Equal
console.log(checkEquality(5, 10)); // Output: Not Equal

// Multiple Conditional (Ternary) Operators
function checkNumber(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
console.log(checkNumber(10)); // Output: Positive
console.log(checkNumber(-5)); // Output: Negative