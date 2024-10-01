function log(message) {
    document.getElementById('output').innerHTML += message + '<br>';
}

const VehicleModule = require('./vehicle').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passengers < this.maximumPassengers) {
            this.passengers += num;
            if (this.passengers > this.maximumPassengers) {
                this.passengers = this.maximumPassengers;
            }
            return true;
        }
        return false;
    }

    start() {
        if (this.fuel > 0) {
            return true;
        }
        return false;
    }

    scheduleService(mileage) {
        if (mileage > 30000) {
            this.scheduleService = true;
            return true;
        }
        return false;
    }
}

let myCar1 = new Car('Mercury', 'A28', '2023', 'Silver', 0);
let myCar2 = new Car('Mercury', 'A28', '2023', 'Black', 35000);

console.log(myCar1);
console.log(myCar2);
console.log(myCar1.loadPassenger(4));
console.log(myCar1.start());
console.log(myCar2.scheduleService(myCar2.mileage));