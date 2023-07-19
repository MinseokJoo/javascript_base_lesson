class Car {
  constructor(modelName, modelYear, type, price) {
    this._modelName = modelName;
    this._modelYear = modelYear;
    this._type = type;
    this._price = price;
  }

  get modelName() {
    return this._modelName;
  }

  set modelName(value) {
    if (value.length < 1) {
      console.log("오류");
      return;
    }
    if (typeof value !== "string") {
      console.log("오류");
      return;
    }
    this._modelName = value;
  }

  get modelYear() {
    return this._modelYear;
  }

  set modelYear(value) {
    if (value.length !== 4) {
      console.log("오류");
      return;
    }
    if (typeof value !== "string") {
      console.log("오류");
      return;
    }
    this._modelYear = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (value.length < 1) {
      console.log("오류");
      return;
    }
    if (value !== "g" || value !== "d" || value !== "e") {
      console.log("오류");
      return;
    }
    this._type = value;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (typeof value !== "number") {
      console.log("오류");
      return;
    }
    if (value > "100") {
      console.log("오류");
      return;
    }
    this._price = value;
  }

  makeNoise() {
    console.log(`${this._modelName}: 빵빵!!`);
  }

  printModelYear() {
    console.log(`${this._modelName}는 ${this._modelYear}년에 만들어졌어용~!`);
  }
}

const car1 = new Car("사탕이자동차", "2023", "d", 10000);
const car2 = new Car("레인지로버", "2023", "g", 1000);
const car3 = new Car("GV80", "2023", "g", 1000);

car1.type = "c";
console.log(car1.type);
