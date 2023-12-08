"use strict";
class Vehicle {
    constructor(color) {
        this.color = color;
    }
    drive() {
        console.log("Driving");
    }
    honk() {
        console.log("honk");
    }
}
const vehicle = new Vehicle("red");
vehicle.color;
// vehicle.drive();
class Car extends Vehicle {
    drive() {
        console.log("driving");
    }
    constructor(color) {
        super(color);
    }
    startDriving() {
        this.drive();
        this.honk();
    }
}
const car3 = new Car("orange");
car3.startDriving();
