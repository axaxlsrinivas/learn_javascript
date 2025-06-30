// Spread Operator Example
const months = ['January', 'February', 'March'];
let newMonths;
(function() {
    newMonths = [...months];
    months[0] = 'April';
})();
console.log(newMonths); // ['January', 'February', 'March']
console.log(months); // ['April', 'February', 'March']