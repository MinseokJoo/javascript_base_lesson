// *가 붙은 함수가 제너레이터 함수이다.
// 이 함수를 실행하면 Iterator 객체가 반환된다.

var addCoffee = function (prevName, name) {
  setTimeout(function () {
    coffeeMaker.next(prevName ? prevName + ", " + name : name);
  }, 500);
};

var coffeeGenerator = function* () {
  var espresso = yield addCoffee("", "에스프레소");
  console.log(espresso);
  var americano = yield addCoffee(espresso, "아메리카노");
  console.log(americano);
  var mocha = yield addCoffee(americano, "카페모카");
  console.log(mocha);
  var latte = yield addCoffee(mocha, "카페라뗴");
  console.log(latte);
};

var coffeeMaker = coffeeGenerator();
coffeeMaker.next();
