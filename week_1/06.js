// 연산자 (+, -, *, /, %)

// 1. 더하기 연산자
console.log(1 + 1);
console.log(1 + "1");

console.log("-----");

// 2. 빼기 연산자
console.log(1 - 2);
console.log(1 - "2");

console.log("-----");

// 3. 곱하기 연산자
console.log(2 * 3);
console.log("2" * 3);

console.log("-----");

// 4. 나누기 연산자
console.log(4 / 2);
console.log("4" / 2);

console.log("-----");

// 5. 나머지 연산자
console.log(5 % 2);

console.log("-----");

// 6. 할당 연산자 (assignment)
// 6-1. 등호 연산자 (=)
let x = 10;
console.log(x);

console.log("-----");

// 6-2. 더하기 등호 연산자 (+=)
x += 5;
console.log(x);

console.log("-----");

// 6-3. 빼기 등호 연산자 (-=)
x -= 5;
console.log(x);

console.log("-----");

// 6-4. 곱하기 등호 연산자 (*=)
let a = 10;
console.log(a);

a *= 2;
console.log(a);

console.log("-----");

// 7. 비교 연산자
// 7-1. 일치 연산자 (===)
// 타입까지 일치 => true
console.log(2 === 2);

console.log("-----");

console.log("2" === 2);

console.log("-----");

// 7-2. 불일치 연산자 (!==)
// 타입까지 일치 => false
console.log(2 !== 2);

console.log("-----");

console.log("2" !== 2);

console.log("-----");

// 7-3. 부등호 연산자
console.log(2 < 3);

console.log("-----");

console.log(2 <= 3);

console.log("-----");

// 8. 논리 연산자
// 8-1. 논리곱 연산자
// 모두 true일때 true 반환
console.log(true && true);
console.log("-----");
console.log(true && false);
console.log("-----");
console.log(false && true);
console.log("-----");
console.log(false && false);

console.log("-----");

// 8-2. 논리합 연산자
console.log(true || true);
console.log("-----");
console.log(true || false);
console.log("-----");
console.log(false || true);
console.log("-----");
console.log(false || false);

console.log("-----");

// 8-3. 논리 부정 연산자
// 값을 반대로
console.log(!true);

console.log("-----");

// 9. 삼항 연산자
// 조건에 따라 값을 선택한다.
let y = 10;
let result = y > 5 ? "크다" : "작다";
console.log(result);
