// 화살표 함수
// ES6 신 문법
// 람다식

// 1-1. 기본적인 화살표 함수
let arrowFunc01 = (x, y) => {
  return x + y;
};

// 1-2. 한줄로
// 리턴만 존재할 경우
let arrowFunc02 = (x, y) => x + y;

function testFunc(x) {
  return x;
}

// 매개변수가 한 개일 경우 매개변수를 감싸는 괄호 생략 가능
let arrowFunc03 = (x) => x;
