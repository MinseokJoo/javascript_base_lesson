class Car {
  constructor(modelName, modelYear, type, price) {
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  makeNoise() {
    console.log(`${this.modelName}: 빵빵!!`);
  }

  printModelYear() {
    console.log(`${this.modelName}는 ${this.modelYear}년에 만들어졌어용~!`);
  }
}

class ElectronicCar extends Car {
  constructor(modelName, modelYear, price, chargeTime) {
    // Car(부모 class)에게도 알려주기!!
    super(modelName, modelYear, "e", price);
    this._chargeTime = chargeTime;
  }

  set chargeTime(value) {
    this._chargeTime = value;
  }
  get chargeTime() {
    return this._chargeTime;
  }
}

const eleCar1 = new ElectronicCar("SatangCar", "2015", 10000, 60);
eleCar1.makeNoise();
eleCar1.printModelYear();
console.log("---------");
console.log(eleCar1._chargeTime);
eleCar1.chargeTime = 20;
console.log(eleCar1._chargeTime);
