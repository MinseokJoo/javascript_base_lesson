// 구조 분해 할당: destructuring(de + structure + ~ing)
// 배열이나, 객체의 속성

// 1. 배열의 경우
let [value1, value2] = [1, "new"];
console.log("value1: ", value1);
console.log("value2: ", value2);

let arr = ["value1", "value2", "value3"];
let [a, b, c, d = 4] = arr;
console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);
console.log("d: ", d);

// 2. 객체의 경우
let user = {
  name: "홍길동",
  age: 30,
};
var { age, name } = user;
console.log("age: ", age);
console.log("name: ", name);

// 새로운 이음으로 할당
var { name: newName, age: newAge } = user;
console.log("newName: ", newName);
console.log("newAge: ", newAge);

var { name, age, birthday } = user;
console.log("age: ", age);
console.log("name: ", name);
console.log("birthday: ", birthday);
