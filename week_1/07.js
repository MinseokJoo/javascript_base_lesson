// 함수 = function (기능)
// input, output

// 1. 함수 선언문
function add(x, y) {
  return x + y;
}

// 2. 함수 표현식
let add2 = function (x, y) {
  return x + y;
};

// 함수를 호출한다. (= 사용한다.)
// 함수명(매개변수) => add(입력값)
console.log(add(2, 3));
console.log(add2(10, 20));
