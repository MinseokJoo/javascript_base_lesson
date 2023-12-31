// 데이터 타입
// 자바스크립트에서 타입은 런타임 시점에 결정된다.
// 런타임 : 코드를 작성할 때가 아니라, 실제 코드가 실행될 때

// 1. 숫자
// 1-1. 정수
let num1 = 10;
console.log(num1);
console.log(typeof num1);

console.log("-----");

// 1-2. 실수(float)
let num2 = 3.14;
console.log(num2);
console.log(typeof num2);

console.log("-----");

// 1-3. 지수(Exp)
let num3 = 2.5e5; // 2.5 * 10^5
console.log(num3);
console.log(typeof num3);

console.log("-----");

// 1-4. NaN (Not a Number)
let num4 = "Hello" / 2;
console.log(num4);
console.log(typeof num4);

console.log("-----");

// 1-5. 무한대 (Infinity)
let num5 = 1 / 0;
console.log(num5);
console.log(typeof num5);

console.log("-----");

// 1-6. 무한대 (-Infinity)
let num6 = -1 / 0;
console.log(num6);
console.log(typeof num6);
