// 스코프, 전역변수, 지역변수
// 변수의 영향 범위

// 전체 영역에서 영향을 끼칠 수 있는 전역변수
let x = 10;

function printX(x) {
  console.log(x);
}

console.log(x);
printX(1);

// 함수 내에서만 지역변수

function printX() {
  let y = 10;
  console.log(y);
}

// console.log(y);
printX();
