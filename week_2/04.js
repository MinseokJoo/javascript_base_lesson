// 일급 객체로서의 함수
// 자바스크립트에서 함수는 일급 객체라고 합니다.
// 일급 객체란 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 가리킨다.

// 1. 변수에 함수를 할당할 수 있다.
const sayHello = function () {
  console.log("Hello!");
};

sayHello();

// 2. 함수를 인자로 다른 함수에 전달할 수 있다.
// 2-1. 콜백함수: 매개변수로써 쓰이는 함수
// 2-2. 고차함수: 함수를 인자로 받거나 return 하는 함수
function callFunction(func) {
  // 매개변수로 받은 변수가 사실, 함수다.
  func();
}
callFunction(sayHello);

// 3. 함수를 반환할 수 있다.
function createAdder(num) {
  return function (x) {
    return x + num;
  };
}
const addFive = createAdder(5);
console.log(addFive(10));
