// 일급객체로써의 함수(2)
// 회실표함수는 this를 바인딩 하지 않는당!
const person = {
  name: "John",
  age: 31,
  isMarried: true,
  sayHello: function () {
    console.log(`Hello, My name is ${this.name}`);
  },
};

person.sayHello();
