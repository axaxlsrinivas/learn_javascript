// Concise declarative functions
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }/*,
    getGear() {
        "use strict";
        return this.gear;
    }*/
};
bicycle.setGear(3);
console.log(bicycle.gear); // 3
//console.log(bicycle.getGear()); // 3