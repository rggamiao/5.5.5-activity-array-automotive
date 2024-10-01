function log(message) {
    document.getElementById('output').innerHTML += message + '<br>';
}

class Car extends Vehicle {
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

    checkService() {
        if (this.mileage > 30000) {
            this.scheduleService = true;
            return true;
        }
        return false;
    }
}

let myCar1 = new Car('Mercury', 'A28', '2023', 'Silver', 0);
let myCar2 = new Car('Mercury', 'A28', '2023', 'Black', 35000);

log(JSON.stringify(myCar1));
log(JSON.stringify(myCar2));
log("Load 4 passengers: " + myCar1.loadPassenger(4));
log("Start car: " + myCar1.start());
log("Check service: " + myCar2.checkService());