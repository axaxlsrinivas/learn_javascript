// ParseInt function
function converttoInteger(value) {
   return parseInt(value);
}
console.log(converttoInteger("42")); // 42

// ParseFloat function with a Radix
function convertToRadix(value) {
   return parseInt(value, 2);
}
console.log(convertToRadix("10011")); // 19