// 형 변환
// 명시적 형 변환, 암시적 형 변환

// 암시적
// 1-1. 문자열
let result1 = 1 + "2";
console.log(result1);
console.log(typeof result1);

console.log("-----");

let result2 = "1" + true;
console.log(result2);
console.log(typeof result2);

// {}, [], null, undefined

console.log("-----");

// 1-2. 숫자
let result3 = 1 - "2";
console.log(result3);
console.log(typeof result3);

console.log("-----");

let result4 = "2" * "3";
console.log(result4);
console.log(typeof result4);

console.log("-----");

// 2. 명시적
// 2-1. Boolean
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

console.log("-----");

console.log(Boolean("false"));
console.log(Boolean({}));

console.log("-----");

// 2-2. 문자열
let result5 = String(123);
console.log(result5);
console.log(typeof result5);

console.log("-----");

let result6 = String(true);
console.log(result6);
console.log(typeof result6);

console.log("-----");

let result7 = String(false);
console.log(result7);
console.log(typeof result7);

console.log("-----");

let result8 = String(null);
console.log(result8);
console.log(typeof result8);

console.log("-----");

let result9 = String(undefined);
console.log(result9);
console.log(typeof result9);

console.log("-----");

// 2-3. 숫자
let result10 = Number("123");
console.log(result10);
console.log(typeof result10);
