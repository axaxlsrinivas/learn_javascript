// Old way to define a constructor function
var spaceShuttle = function(targetPlanet) {
  this.targetPlanet = targetPlanet;
}
var zeus = new spaceShuttle('Jupiter');
console.log(zeus.targetPlanet); // Output: Jupiter

// Using the class keyword to define a constructor function
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
var zeus2 = new SpaceShuttle('Jupiter');
console.log(zeus2.targetPlanet); // Output: Jupiter

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = this.name;
        }
    }
}
const vegitable = makeClass();
const carrot = new vegitable('carrot');
console.log(carrot.name); // Output: carrot
