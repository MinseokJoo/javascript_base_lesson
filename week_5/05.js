// Getters, Setters
class Rectangle {
  constructor(width, height) {
    // underscore: private
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(value) {
    if (value <= 0) {
      console.log("가로 길이는 0보다 커야 합니다.");
      return;
    } else if (typeof value !== "number") {
      console.log("숫자타입만 가능");
      return;
    }
    this._width = value;
  }

  get height() {
    return this._height;
  }

  set height(value) {
    if (value <= 0) {
      console.log("세로 길이는 0보다 커야 합니다.");
      return;
    } else if (typeof value !== "number") {
      console.log("숫자타입만 가능");
      return;
    }
    this._height = value;
  }

  getArea() {
    return console.log(this._height * this._width);
  }
}

const rect1 = new Rectangle(10, 20);
const rect2 = new Rectangle(10, 30);
const rect3 = new Rectangle(15, 20);
rect1.getArea();
