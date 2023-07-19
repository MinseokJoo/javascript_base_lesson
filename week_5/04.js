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

const car1 = new Car("사탕이자동차", 2023, "d", "1억원");
const car2 = new Car("레인지로버", 2023, "g", "1억원");
const car3 = new Car("GV80", 2023, "g", "1억원");

car1.makeNoise();
car1.printModelYear();
