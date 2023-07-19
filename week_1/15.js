// for문: 반복문

// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(i + "번째" + arr[i]);
// }

for (let i = 0; i <= 10; i++) {
  if (i !== 0 && i % 2 === 0) {
    console.log(i);
  }
}

let person = {
  name: "John",
  age: 30,
  gender: "male",
};

// for ~ in 문
// 객체의 속성을 출력하는 문법
for (let key in person) {
  console.log(key + ": " + person[key]);
}
