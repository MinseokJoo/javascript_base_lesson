// 2. 문자열 : string
// '', ""
let str = "Hello world";
console.log(str);
console.log(typeof str);

console.log("-----");

// 2-1. 문자열 길이 확인하기
console.log(str.length);

console.log("-----");

// 2-2. 문자열 결합하기
let str1 = "Hello, ";
let str2 = "world!";

let result = str1.concat(str2);
console.log(result);

console.log("-----");

// 2-3. 문자열 자르기
let str3 = "Hello, World!";
console.log(str3.substr(7, 5));
console.log(str3.slice(7, 12));

console.log("-----");

// 2-4. 문자열 검색
let str4 = "Hello, World!";
console.log(str4.search("World"));

console.log("-----");

// 2-5. 문자열 대체
let str5 = "Hello, World!";
let result1 = str5.replace("World", "Javascript");
console.log(result1);

console.log("-----");

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result2 = str6.split(", ");
console.log(result2);
