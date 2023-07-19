// Static Method(= 정적 메서드)
// Class => 객체를 만들기 위해서 사용
// 다량으로, 안전하고, 정확하게

class Calculator {
  static add(a, b) {
    return a + b;
  }
  static substract(a, b) {
    return a - b;
  }
}

console.log(Calculator.add(1, 2));
console.log(Calculator.substract(1, 3));
