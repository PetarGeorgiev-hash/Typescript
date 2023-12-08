class Vehicle {
  color: string;
  constructor(color: string) {
    this.color = color;
  }

  protected drive(): void {
    console.log("Driving");
  }
  protected honk(): void {
    console.log("honk");
  }
}

const vehicle = new Vehicle("red");
vehicle.color;
// vehicle.drive();

class Car extends Vehicle {
  protected drive(): void {
    console.log("driving");
  }
  constructor(color: string) {
    super(color);
  }
  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car3 = new Car("orange");
car3.startDriving();
